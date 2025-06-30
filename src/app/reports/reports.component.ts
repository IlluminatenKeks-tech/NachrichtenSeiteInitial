import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

interface Report {
  city: string;
  transportType: string;
  line?: string;
  problemType: string;
  details?: string;
  timestamp: string;
}

@Component({
  selector: 'app-reports',
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {

  showReportForm = false;

  form: Partial<Report> = {
    city: 'Stuttgart',
    transportType: '',
    line: '',
    problemType: '',
    details: ''
  };

  lineOptions: string[] = [];

  problemTypes: string[] = [
    'Verspätung',
    'Zug ausgefallen',
    'Aufzug defekt',
    'Rolltreppe defekt',
    'Technische Störung',
    'Signalproblem',
    'Streckensperrung',
    'Unfall',
    'Stau',
    'Andere Problem',
  ];

  allReports: Report[] = [];

  reportView: 'latest' | 'hour' | 'day' = 'latest';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const csvURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSbjF8U3FWABCSOmI2b5qma71avhVpAeHI5yNP7RaQeUolN-BXlN5psb4Mq7_krG36ay_uFn637-cIB/pub?output=csv';

    this.http.get(csvURL, { responseType: 'text' }).subscribe(csv => {
      const lines = csv.split('\n').slice(1);
      const reports: Report[] = lines
        .map(line => line.split(','))
        .filter(cols => cols.length >= 6)
        .map(cols => {
          const parsedDate = this.parseEuropeanDate(cols[0]);
          if (!parsedDate) return null;

          return {
            timestamp: parsedDate.toISOString(),
            city: cols[1],
            transportType: cols[2],
            line: cols[3],
            problemType: cols[4],
            details: cols[5],
          } as Report;
        })
        .filter((r): r is Report => r !== null);

      this.allReports = reports.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    });
  }

  parseEuropeanDate(dateStr: string): Date | null {
    const parts = dateStr.trim().split(' ');
    if (parts.length !== 2) return null;

    const [datePart, timePart] = parts;
    const [day, month, year] = datePart.split('/');
    if (!day || !month || !year) return null;

    return new Date(`${year}-${month}-${day}T${timePart}`);
  }

  get latestReports(): Report[] {
    return this.allReports.slice(0, 5);
  }

  get displayedReports(): Report[] {
    if (this.reportView === 'hour') {
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      return this.allReports.filter(r => new Date(r.timestamp).getTime() >= oneHourAgo);
    }

    if (this.reportView === 'day') {
      const today = new Date();
      return this.allReports.filter(r => {
        const d = new Date(r.timestamp);
        return (
          d.getFullYear() === today.getFullYear() &&
          d.getMonth() === today.getMonth() &&
          d.getDate() === today.getDate()
        );
      });
    }

    // Default view
    return this.latestReports;
  }

  onTransportTypeChange() {
    const t = this.form.transportType;
    if (t === 'Straßenbahn') {
      this.lineOptions = [
        'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9',
        'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U19'
      ];
    } else if (t === 'S-Bahn') {
      this.lineOptions = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S11', 'S60', 'S62'];
    } else if (t === 'Bus') {
      this.lineOptions = [
        'X2', '10', '40', '41', '42', '43', '44', '45', '47',
        '50', '52', '53', '54', '56', '57', '58',
        '60', '61', '62', '64', '65', '66',
        'X4', 'X7', '70', '71', '72', '73', '74', '76', '77',
        '80', '81', '82', '84', '86',
        '90', '91', '92', '98', '99',
        'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'N10'
      ];
    } else {
      this.lineOptions = [];
    }
    this.form.line = '';
  }

  onProblemTypeChange() {
    if (this.form.problemType !== 'Andere Problem') {
      this.form.details = '';
    }
  }

  submitReport() {
    const transport = this.form.transportType;
    const line = transport === 'Station' ? this.form.line : this.form.line;

    if (
      !transport ||
      ((['Straßenbahn', 'Bus', 'S-Bahn'].includes(transport!) && !line)) ||
      !this.form.problemType ||
      (this.form.problemType === 'Andere Problem' && !this.form.details)
    ) {
      alert('Bitte alle erforderlichen Felder ausfüllen.');
      return;
    }

    const newReport: Report = {
      city: this.form.city!,
      transportType: transport!,
      line: line,
      problemType: this.form.problemType!,
      details: this.form.details,
      timestamp: new Date().toISOString(),
    };

    // Sendung in Google Form
    const formEl = document.createElement('form');
    formEl.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2Fro173QaXTHrE1rCSchpPH4hJxrQpSEpmSevM-fsllo_tA/formResponse';
    formEl.method = 'POST';
    formEl.target = 'hidden_iframe';
    formEl.style.display = 'none';

    const fieldMap: { [key: string]: string } = {
      city: 'entry.454124134',
      transportType: 'entry.1044800262',
      line: 'entry.1941507501',
      problemType: 'entry.1572843099',
      details: 'entry.822526501',
    };

    for (const key in fieldMap) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = fieldMap[key];
      input.value = (newReport as any)[key];
      formEl.appendChild(input);
    }

    document.body.appendChild(formEl);
    formEl.submit();
    document.body.removeChild(formEl);


    this.form = {
      city: 'Stuttgart',
      transportType: '',
      line: '',
      problemType: '',
      details: ''
    };
    this.lineOptions = [];
    this.showReportForm = false;
  }
}
