import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './FirebaseConfig';

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
