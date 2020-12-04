import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';

export default function NoteListItem({
  title,
  onPress,
  onDelete,
  darkMode,
}) {
  const color = darkMode ? '#fff' : '#000';
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={[styles.text, { color }]}>{title}</Text>
      <Pressable onPress={onDelete}>
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
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '100',
  },
});
