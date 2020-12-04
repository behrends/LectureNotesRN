import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { DarkModeContext } from '../hooks/DarkModeContext';

export default function Details({ route, navigation }) {
  const note = route.params.note;
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? '#000' : '#fff';
  const color = darkMode ? '#fff' : '#000';
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ marginTop: 100, color }}>{note.title}</Text>
      <Button
        title="Bearbeiten"
        onPress={() => navigation.navigate('Edit', { note: note })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
