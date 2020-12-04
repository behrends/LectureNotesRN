import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DarkModeContext } from '../hooks/DarkModeContext';

export default function Photos() {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? '#000' : '#fff';
  const color = darkMode ? '#fff' : '#000';
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>PHOTOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
