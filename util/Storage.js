import Firebase from '../util/Firebase';

export default class Storage {
  // TODO: private (static) field for collection name
  // FIX: update home screen after edit
  // TODO: navigation with id instead of note?

  static init() {
    return Firebase.init();
  }

  static createNote(title) {
    Firebase.db.collection('notes').add({ title });
  }

  static async deleteNote(id) {
    Firebase.db.collection('notes').doc(id).delete();
  }

  static async updateNote(note) {
    Firebase.db
      .collection('notes')
      .doc(note.id)
      .update({ title: note.title });
  }

  static async readData() {
    const notes = [];
    let query = await Firebase.db.collection('notes').get();
    query.forEach((note) => {
      notes.push({
        id: note.id,
        title: note.data().title,
        text: note.data().text,
      });
    });
    return notes;
  }
}
