import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function NoteForm({ title, onSave, darkMode }) {
  const [input, setInput] = useState(title);
  const backgroundColor = darkMode ? '#000' : '#fff';
  const color = darkMode ? '#fff' : '#000';
  return (
    <View style={[styles.container, { backgroundColor }]}>
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
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    width: '80%',
  },
});
