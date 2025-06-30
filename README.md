# API Links
https://tagesschau.api.bund.dev

https://sv443.net/jokeapi/v2/

## 🚋 Störungsmelder – Funktionsweise
Diese Webanwendung ermöglicht es Nutzern, Probleme mit öffentlichen Verkehrsmitteln (Straßenbahn, S-Bahn, Bus) in Stuttgart schnell und unkompliziert zu melden. Die gemeldeten Störungen werden automatisch in einer Google-Tabelle gespeichert und können auf der Website angezeigt werden.

### 📝 Formular zur Störungsmeldung
Nutzer wählen Verkehrstyp (z.B. Straßenbahn, S-Bahn, Bus).

Abhängig vom Verkehrstyp werden passende Linienoptionen angezeigt.

Danach wählen sie den Störungstyp (z.B. Verspätung, Ausfall, technische Probleme usw.).

Bei Auswahl von „Andere Problem“ kann ein eigenes Detail angegeben werden.

Nach dem Klick auf „Absenden“ wird die Meldung an ein Google-Formular gesendet, das mit einer Google-Tabelle verbunden ist.

ℹ️ Die Google Form-URL und Feldzuordnungen befinden sich direkt im Code (submitReport() Methode).

### 📄 Anzeige der gemeldeten Störungen
Beim Laden der Seite:

Wird die mit dem Formular verbundene Google-Tabelle im CSV-Format abgerufen.

Die Daten werden analysiert und nach Zeitstempel sortiert.

Nutzer können verschiedene Ansichten auswählen:

Letzte 5 Meldungen

Alle Meldungen der letzten Stunde

Alle Meldungen von heute

ℹ️ Die Zeitstempel werden im Format dd/MM/yyyy HH:mm:ss gespeichert und entsprechend konvertiert, damit sie korrekt verarbeitet werden können.

### 📤 Wichtige Hinweise
Alle Formularmeldungen werden unsichtbar per POST an das Google-Formular gesendet.

Die Seite verwendet keine Datenbank oder Backend, alles läuft rein über Google Forms & Sheets.

Die letzten Meldungen werden clientseitig (im Browser) verarbeitet.














# ProjektWebEng2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
