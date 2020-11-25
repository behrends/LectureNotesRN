# LectureNotesRN

Beispiel-App (React Native) für die Vorlesung „Entwicklung mobiler Apps“ an der DHBW Lörrach.

Abhängigkeiten des Projekts installieren, indem im Projektverzeichnis `npm install` oder `yarn` ausgeführt wird.

Für die Verwendung von Firebase (Firestore) muss eine Datei `util/FirebaseConfig.js` erstellt werden, die die Konfigurationsdaten in dieser Form bereit stellt:

```
export default {
  apiKey: 'WERT EINTRAGEN',
  authDomain: 'WERT EINTRAGEN',
  databaseURL: 'WERT EINTRAGEN',
  projectId: 'WERT EINTRAGEN',
  storageBucket: 'WERT EINTRAGEN',
  messagingSenderId: 'WERT EINTRAGEN',
  appId: 'WERT EINTRAGEN',
};
```

Die Konfigurationsdaten können in der Firebase-Konsole ermittelt werden.
