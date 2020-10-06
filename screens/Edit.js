import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import Storage from '../util/Storage';

export default class Edit extends React.Component {
  state = { input: this.props.route.params?.title };

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
          onPress={() => {
            Storage.createNote(this.state.input);
            this.props.navigation.navigate('Details', {
              title: this.state.input,
            });
          }}
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
