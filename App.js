import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './components/Title';
import Content from './components/Content';

export default function App() {
  return (
    <View style={styles.container}>
      <Title text="Titel Nr.1" />
      <Content />
      <Title text="Titel Nr.2" />
      <Content />
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
});
