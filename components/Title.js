import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Hier kommt der Titel hin</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
