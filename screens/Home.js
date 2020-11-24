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
  state = { notes: [], firebaseError: false };

  doDeleteNote(id) {
    const currentNotes = this.state.notes;
    const newNotes = currentNotes.filter((item) => item.id !== id);
    Storage.deleteNote(id);
    this.setState({ notes: newNotes });
  }

  deleteNote(item) {
    Alert.alert(
      'Notiz löschen',
      `Wirklich Notiz ${item.title} löschen?`,
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'OK', onPress: () => this.doDeleteNote(item.id) },
      ],
      { cancelable: true }
    );
  }

  async readData() {
    const notes = await Storage.readData();
    this.setState({ notes: notes });
  }

  componentDidMount() {
    if (Storage.init()) {
      this.readData();
    } else {
      this.setState({ firebaseError: true });
    }
  }

  render() {
    if (this.state.firebaseError) {
      return (
        <View style={styles.container}>
          <Text>
            Die Verbindung zu Firebase konnte nicht hergestellt
            werden.
          </Text>
          <Text>Überprüfe bitte die Firebase-Konfiguration.</Text>
        </View>
      );
    }
    const { navigate } = this.props.navigation;
    // HACK/TODO: lade Daten neu, wenn wir von Create zurückkommen
    // --> besser wäre die Nutzung von useFocusEffect, denn
    // dies funktioniert nicht, wenn wir von Edit zurückkommen…
    if (this.props.route.params?.title) this.readData();
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.notes}
          renderItem={({ item }) => (
            <NoteListItem
              title={item.title}
              onPress={() => navigate('Details', { note: item })}
              onDelete={() => this.deleteNote(item)}
            />
          )}
          ListEmptyComponent={<NoteListEmpty />}
        />
        <Button
          title="Neue Notiz"
          onPress={() => navigate('Create')}
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
