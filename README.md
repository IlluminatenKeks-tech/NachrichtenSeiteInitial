# 📰 Tageschaos – Nachrichtenportal als Angular-Webanwendung

## Projektübersicht

Tageschaos ist eine Angular-Webanwendung, die im Rahmen eines Gruppenprojekts für den Kurs "Web Engineering 2" entwickelt wurde. Ziel war es, ein interaktives und funktionales Nachrichtenportal ohne eigenes Backend zu erstellen.

Die Anwendung besteht aus mehreren Seiten:

- Startseite
- Nachrichten von heute
- Alle Nachrichten (mit Such- und Filterfunktion)
- Witzeseite mit themenspezifischen Witzen
- Störungsmelder für den öffentlichen Verkehr in Stuttgart
- Über-uns-Seite mit Projektinformationen

Die Anwendung verwendet keine eigene Datenbank oder Backendserver, sondern ausschließlich öffentliche APIs sowie Google Forms und Sheets zur Datenspeicherung und -anzeige.

---

## Projektstart

Zum Starten des Projekts:

```bash
npm install
ng serve
```

Danach ist die Anwendung unter http://localhost:4200/ erreichbar.

---

## Verwendete APIs

- Tagesschau API

https://tagesschau.api.bund.dev

→ Liefert aktuelle Nachrichten für die Seiten Heute und Alle Nachrichten.

- JokeAPI

https://sv443.net/jokeapi/v2

→ Dient zur Generierung von Witzen auf der Seite Witz.

---

## Seitenbeschreibung

### Home
Kurze Einführung in die Webseite und Verlinkung zu den Hauptfunktionen.

### Heute
Anzeigen der neuesten Nachrichten des Tages über die Tagesschau API.

### Alle Nachrichten
Darstellung aller verfügbaren Nachrichten mit der Möglichkeit zur Suche nach Stichwörtern und zur Filterung nach Datum.

### Witz
Nutzer können ein Thema auswählen, woraufhin passende Witze automatisch geladen werden. Die Witze stammen von der JokeAPI.

### About us
Informationen über das Projekt.

### Bahn-Störungen – Störungsmelder

Diese Seite bietet zwei Funktionen:

1. Meldung von Störungen

    Nutzer:innen können Probleme mit öffentlichen Verkehrsmitteln in Stuttgart melden:

      - Auswahl des Verkehrstyps (Straßenbahn, S-Bahn, Bus)

      - Auswahl der Linie (dynamisch angepasst)

      - Auswahl des Problemtyps oder Eingabe eines individuellen Problems

      - Die Daten werden per unsichtbarem POST an ein Google-Formular übermittelt.

      - Die Meldungen werden in einer Google-Tabelle gespeichert.

2. Anzeige aktueller Störungen

    - Daten aus der Google-Tabelle werden im CSV-Format geladen

    - Sortierung nach Zeitstempel

    - Drei Ansichtsmodi:

      - Letzte 5 Meldungen

      - Meldungen der letzten Stunde

      - Meldungen vom heutigen Tag

Die Seite benötigt weder Datenbank noch Backend – alles läuft über Google Forms & Sheets.

---

## Team und Aufgabenverteilung

Dieses Projekt wurde im Team umgesetzt:

- **Antonia Wiedenmann**:

Seiten: Heute, Alle Nachrichten, About us

- **Anna Tsyvinska**:

Seiten: Home, Witz, Bahn-Störungen

- **Gemeinsam**:

Design & Navigation (app.component)
