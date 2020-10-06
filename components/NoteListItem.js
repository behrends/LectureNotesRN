import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';

export default function NoteListItem(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Pressable onPress={props.onDelete}>
        <Icon.MaterialCommunityIcons
          name="delete"
          size={20}
          color="lightgray"
        />
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
