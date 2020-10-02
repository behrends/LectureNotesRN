import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Content() {
  return (
    <Text style={styles.content}>
      Inhalt der Notiz der auch sehr lang sein kann und über mehrere
      Zeilen geht
    </Text>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});
