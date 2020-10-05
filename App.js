import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home-Screen für die Liste der Notizen
function Home() {
  return <Text style={{ marginTop: 100 }}>HOME</Text>;
}
// Screen für Einstellungen
function Settings() {
  return <Text style={{ marginTop: 100 }}>SETTINGS</Text>;
}

export default function App() {
  return <Home />;
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
