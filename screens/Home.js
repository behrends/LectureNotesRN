import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NoteListItem from '../components/NoteListItem';
import Storage from '../util/Storage';

function NoteListEmpty() {
  return (
    <Text style={{ fontSize: 32, textAlign: 'center' }}>
      Keine Notizen
    </Text>
  );
}

export default class Home extends React.Component {
  state = { notes: [] };

  async readDataFromDB() {
    const notes = await Storage.readDataFromDB();
    this.setState({ notes: notes });
  }

  deleteNote(id) {
    // TODO alert(`Wirklich Notiz mit ID ${id} löschen?`);
    const currentNotes = this.state.notes;
    const newNotes = currentNotes.filter((item) => item.id !== id);
    Storage.saveNotes(newNotes);
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
