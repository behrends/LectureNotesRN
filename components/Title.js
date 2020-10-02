import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Title(props) {
  const text = props.text;
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
