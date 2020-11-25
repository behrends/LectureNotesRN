import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function NoteForm({ title, onSave }) {
  const [input, setInput] = useState(title);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Speichern" onPress={() => onSave(input)} />
    </View>
  );
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
