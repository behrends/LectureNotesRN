import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  // TODO --> hier die Firebase - Config einfügen
};

export default class Firebase {
  static db;

  static init() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    Firebase.db = firebase.firestore();
  }
}
