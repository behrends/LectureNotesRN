import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default class Content extends React.Component {
  render() {
    return (
      <Pressable onPress={() => alert('ok!!!!')}>
        <Text style={styles.content}>
          Inhalt der Notiz der auch sehr lang sein kann und über
          mehrere Zeilen geht
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});
