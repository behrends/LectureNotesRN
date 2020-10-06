import React from 'react';
import NoteForm from '../components/NoteForm';
import Storage from '../util/Storage';

export default function Edit({ route, navigation }) {
  const note = route.params?.note;
  return (
    <NoteForm
      title={note.title}
      onSave={(title) => {
        const updatedNote = { id: note.id, title: title };
        Storage.updateNote(updatedNote);
        navigation.navigate('Details', { note: updatedNote });
      }}
    />
  );
}
