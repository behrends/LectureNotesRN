import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function NoteListItem(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Pressable onPress={() => alert('delete!')}>
        <Text>Löschen</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 40,
    fontWeight: '100',
  },
});
