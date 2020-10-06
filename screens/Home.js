import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NoteListItem from '../components/NoteListItem';
import AsyncStorage from '@react-native-community/async-storage';

const noteList = [
  { id: '1', title: 'Notiz' },
  { id: '2', title: 'Bemerkung' },
  { id: '3', title: 'Witz' },
];

// DB mit initialen Beispiel-Daten befüllen
function populateDB() {
  console.log('---> populateDB');
  // JSON – JavaScript Object Notation
  // AsyncStorage.setItem(KEY, VALUE/JSON-String)
  const jsonData = JSON.stringify(noteList);
  AsyncStorage.setItem('notes', jsonData);
}

async function readDataFromDB() {
  const data = await AsyncStorage.getItem('notes'); // siehe Promises
  const notes = JSON.parse(data); // JSON-String --> JavaScript-Objekt
  console.log('---> notes', notes);
}

export default function Home({ navigation }) {
  // const navigation = props.navigation; dies passiert in ({navigation})

  populateDB();
  readDataFromDB();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={noteList}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() =>
              navigation.navigate('Details', { title: item.title })
            }
          />
        )}
      />
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
