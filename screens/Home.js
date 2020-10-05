import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title="Notiz 1" onPress={() => alert('Notiz 1')} />
      <Button title="Notiz 2" onPress={() => alert('Notiz 2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
