import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const title = 'Titel meiner Notiz';
  const text =
    'Inhalt der Notiz der auch sehr lang sein kann über mehrere Zeilen';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});
