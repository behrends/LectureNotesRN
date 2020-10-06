import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class NoteForm extends React.Component {
  state = { input: this.props.title };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={(text) => this.setState({ input: text })}
        />
        <Button
          title="Speichern"
          onPress={() => this.props.onSave(this.state.input)}
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
  input: {
    padding: 15,
    borderWidth: 1,
    width: '80%',
  },
});
