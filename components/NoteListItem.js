import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function NoteListItem(props) {
  return <Text style={styles.text}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '100',
  },
});
