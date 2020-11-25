import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './FirebaseConfig';

// TODO: offline capability
// https://github.com/nandorojo/expo-firestore-offline-persistence/
// https://firebase.google.com/docs/firestore/manage-data/enable-offline

// TODO: realtime updates (auto sync)
// https://firebase.google.com/docs/firestore/query-data/listen
export default class Firebase {
  static db;

  static init() {
    try {
      if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      Firebase.db = firebase.firestore();
      return true;
    } catch (exception) {
      return false;
    }
  }
}
