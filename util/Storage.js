import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
  static async createNote(title) {
    const data = await AsyncStorage.getItem('notes');
    let notes = JSON.parse(data);
    if (notes === null) notes = [];
    const id = '' + Date.now(); // HACK: use now in milliseconds as ID
    notes.push({ id: id, title: title });
    AsyncStorage.setItem('notes', JSON.stringify(notes));
    // SQLite ---> siehe Videokurs
  }
}
