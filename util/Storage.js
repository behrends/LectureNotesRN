import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
  // TODO: aufräumen und vereinfachen
  static async createNote(title) {
    const data = await AsyncStorage.getItem('notes');
    let notes = JSON.parse(data);
    if (notes === null) notes = [];
    const id = '' + Date.now(); // HACK: use now in milliseconds as ID
    notes.push({ id: id, title: title });
    this.saveNotes(notes);
  }

  static async updateNote(note) {
    const data = await AsyncStorage.getItem('notes');
    const notes = JSON.parse(data);
    const index = notes.findIndex((item) => item.id === note.id);
    notes[index] = note;
    this.saveNotes(notes);
  }

  static async readDataFromDB() {
    const data = await AsyncStorage.getItem('notes'); // siehe Promises
    let notes = JSON.parse(data); // JSON-String --> JavaScript-Objekt
    if (notes === null) notes = [];
    return notes;
  }

  static saveNotes(notes) {
    AsyncStorage.setItem('notes', JSON.stringify(notes));
  }
}
