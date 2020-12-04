import React, { useContext } from 'react';

import { DarkModeContext } from '../hooks/DarkModeContext';
import NoteForm from '../components/NoteForm';
import Storage from '../util/Storage';

export default function Create({ route, navigation }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <NoteForm
      title={route.params?.title}
      onSave={(title) => {
        Storage.createNote(title);
        navigation.navigate('HomeScreen');
      }}
      darkMode={darkMode}
    />
  );
}
