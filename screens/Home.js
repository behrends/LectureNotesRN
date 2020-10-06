import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NoteListItem from '../components/NoteListItem';
import AsyncStorage from '@react-native-community/async-storage';

function NoteListEmpty() {
  return (
    <Text style={{ fontSize: 32, textAlign: 'center' }}>
      Keine Notizen
    </Text>
  );
}

export default class Home extends React.Component {
  state = { notes: [] };

  // TODO: verwende Storage-Klasse
  async readDataFromDB() {
    const data = await AsyncStorage.getItem('notes'); // siehe Promises
    const notes = JSON.parse(data); // JSON-String --> JavaScript-Objekt
    this.setState({ notes: notes });
  }

  deleteNote(id) {
    // alert(`Wirklich Notiz mit ID ${id} löschen?`);
    const currentNotes = this.state.notes;
    // liefere alle Notizen außer die zum Löschen
    const newNotes = currentNotes.filter((item) => item.id !== id);
    const jsonData = JSON.stringify(newNotes);
    AsyncStorage.setItem('notes', jsonData);
    this.setState({ notes: newNotes });
  }

  componentDidMount() {
    this.readDataFromDB();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.notes}
          renderItem={({ item }) => (
            <NoteListItem
              title={item.title}
              onPress={() =>
                this.props.navigation.navigate('Details', {
                  title: item.title,
                })
              }
              onDelete={() => this.deleteNote(item.id)}
            />
          )}
          ListEmptyComponent={<NoteListEmpty />}
        />
        <Button
          title="Neue Notiz"
          onPress={() => this.props.navigation.navigate('Edit')}
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
