import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function NoteListItem(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '100',
  },
});
