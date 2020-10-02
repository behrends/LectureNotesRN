import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const title = 'Titel meiner Notiz';
  const text = 'Inhalt der Notiz';
  return (
    // JSX - JavaScript and XML
    // Darstellung im UI
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // KEIN CSS nur so ähnlich
    alignItems: 'center',
    justifyContent: 'center',
  },
});
