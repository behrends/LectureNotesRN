import React, { useContext } from 'react';

import { DarkModeContext } from '../hooks/DarkModeContext';
import NoteForm from '../components/NoteForm';
import Storage from '../util/Storage';

export default function Edit({ route, navigation }) {
  const note = route.params?.note;
  const { darkMode } = useContext(DarkModeContext);
  return (
    <NoteForm
      title={note.title}
      onSave={(title) => {
        const updatedNote = { id: note.id, title: title };
        Storage.updateNote(updatedNote);
        navigation.navigate('Details', { note: updatedNote });
      }}
      darkMode={darkMode}
    />
  );
}
