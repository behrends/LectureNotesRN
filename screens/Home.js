import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NoteListItem from '../components/NoteListItem';
import Storage from '../util/Storage';

function NoteListEmpty() {
  return (
    <Text style={{ fontSize: 32, textAlign: 'center' }}>
      Keine Notizen
    </Text>
  );
}

export default function Home({ navigation, route }) {
  const [notes, setNotes] = useState([]);
  const [firebaseError, setFirebaseError] = useState(false);

  useEffect(() => {
    if (Storage.init()) {
      readData();
    } else {
      setFirebaseError(true);
    }
  }, []);

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

  async function readData() {
    const notes = await Storage.readData();
    setNotes(notes);
  }

  if (firebaseError) {
    return (
      <View style={styles.container}>
        <Text>
          Die Verbindung zu Firebase konnte nicht hergestellt werden.
        </Text>
        <Text>Überprüfe bitte die Firebase-Konfiguration.</Text>
      </View>
    );
  }
  const { navigate } = navigation;
  // HACK/TODO: lade Daten neu, wenn wir von Create zurückkommen
  // und auch von Edit -> Details -> Home
  // --> besser wäre die Nutzung von useFocusEffect, denn
  // dies funktioniert nicht, wenn wir von Edit zurückkommen…
  if (route.params?.title) readData();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() => navigate('Details', { note: item })}
            onDelete={() => deleteNote(item)}
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
  list: {
    paddingHorizontal: 10,
    width: '100%',
  },
});
