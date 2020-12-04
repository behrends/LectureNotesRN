import React, { useContext } from 'react';
import { Switch, StyleSheet, Text, View } from 'react-native';
import { DarkModeContext } from '../hooks/DarkModeContext';

export default function Settings() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const backgroundColor = darkMode ? '#000' : '#fff';
  const color = darkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>Dark Mode:</Text>
      <Switch onValueChange={toggleDarkMode} value={darkMode} />
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
