import Firebase from '../util/Firebase';

export default class Storage {
  static #COLLECTION = 'notes';

  static init() {
    return Firebase.init();
  }

  static createNote(title) {
    Firebase.db.collection(this.#COLLECTION).add({ title });
  }

  static async deleteNote(id) {
    Firebase.db.collection(this.#COLLECTION).doc(id).delete();
  }

  static async updateNote(note) {
    Firebase.db
      .collection(this.#COLLECTION)
      .doc(note.id)
      .update({ title: note.title });
  }

  static async readData() {
    const notes = [];
    let query = await Firebase.db
      .collection(this.#COLLECTION)
      .orderBy('title')
      .get();
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
