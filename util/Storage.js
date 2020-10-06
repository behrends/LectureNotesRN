import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
  static async createNote(title) {
    const data = await AsyncStorage.getItem('notes');
    const notes = JSON.parse(data);
    // TODO eindeutige ID statt Array.length
    notes.push({ id: notes.length + 1, title: title });
    AsyncStorage.setItem('notes', JSON.stringify(notes));
    // SQLite ---> siehe Videokurs
  }
}
