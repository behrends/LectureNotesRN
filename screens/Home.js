import React, { useCallback, useContext, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { DarkModeContext } from '../hooks/DarkModeContext';
import NoteListItem from '../components/NoteListItem';
import Storage from '../util/Storage';

function NoteListEmpty() {
  return (
    <Text style={{ fontSize: 32, textAlign: 'center' }}>
      Keine Notizen
    </Text>
  );
}

export default function Home({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [firebaseError, setFirebaseError] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  // load notes every time this screen is focussed
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        if (Storage.init()) {
          const data = await Storage.readData();
          setNotes(data);
        } else {
          setFirebaseError(true);
        }
      };
      fetchData();
    }, [])
  );

  function doDeleteNote(id) {
    const newNotes = notes.filter((item) => item.id !== id);
    Storage.deleteNote(id);
    setNotes(newNotes);
  }

  function deleteNote(item) {
    Alert.alert(
      'Notiz löschen',
      `Wirklich Notiz ${item.title} löschen?`,
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'OK', onPress: () => doDeleteNote(item.id) },
      ],
      { cancelable: true }
    );
  }

  const backgroundColor = darkMode ? '#000' : '#fff';

  if (firebaseError) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          Die Verbindung zu Firebase konnte nicht hergestellt werden.
          Es werden eine Internetverbindung und gültige
          Konfigurationsdaten in util/FirebaseConfig.js benötigt.
        </Text>
      </View>
    );
  }
  const { navigate } = navigation;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() => navigate('Details', { note: item })}
            onDelete={() => deleteNote(item)}
            darkMode={darkMode}
          />
        )}
        ListEmptyComponent={<NoteListEmpty />}
      />
      <Button title="Neue Notiz" onPress={() => navigate('Create')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    padding: 20,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 10,
    width: '100%',
  },
});
