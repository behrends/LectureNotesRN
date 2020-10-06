import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NoteListItem from '../components/NoteListItem';
import AsyncStorage from '@react-native-community/async-storage';

const noteList = [
  { id: '1', title: 'Notiz' },
  { id: '2', title: 'Bemerkung' },
  { id: '3', title: 'Witz' },
];

export default class Home extends React.Component {
  populateDB() {
    console.log('---> populateDB in Klasse');
    const jsonData = JSON.stringify(noteList);
    AsyncStorage.setItem('notes', jsonData);
  }

  async readDataFromDB() {
    const data = await AsyncStorage.getItem('notes'); // siehe Promises
    const notes = JSON.parse(data); // JSON-String --> JavaScript-Objekt
    console.log('---> notes', notes);
  }

  componentDidMount() {
    // wird nach render ausgeführt!!!! ---> Lebenszyklus / Lifecycle
    this.populateDB();
    this.readDataFromDB();
  }

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={noteList}
          renderItem={({ item }) => (
            <NoteListItem
              title={item.title}
              onPress={() =>
                this.props.navigation.navigate('Details', {
                  title: item.title,
                })
              }
            />
          )}
        />
      </View>
    );
  }
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
