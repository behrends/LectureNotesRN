import React from 'react';
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

export default class Home extends React.Component {
  state = { notes: [] };

  async readDataFromDB() {
    const notes = await Storage.readDataFromDB();
    this.setState({ notes: notes });
  }

  doDeleteNote(id) {
    const currentNotes = this.state.notes;
    const newNotes = currentNotes.filter((item) => item.id !== id);
    Storage.saveNotes(newNotes);
    this.setState({ notes: newNotes });
  }

  deleteNote(id) {
    Alert.alert(
      'Notiz löschen',
      `Wirklich Notiz mit ID ${id} löschen?`,
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'OK', onPress: () => this.doDeleteNote(id) },
      ],
      { cancelable: true }
    );
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
