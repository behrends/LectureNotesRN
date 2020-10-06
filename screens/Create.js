import React from 'react';
import NoteForm from '../components/NoteForm';
import Storage from '../util/Storage';

export default function Create({ route, navigation }) {
  return (
    <NoteForm
      title={route.params?.title}
      onSave={(title) => {
        Storage.createNote(title);
        navigation.navigate('HomeScreen', { title: title });
      }}
    />
  );
}
