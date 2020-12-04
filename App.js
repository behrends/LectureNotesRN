import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DarkModeContext } from './hooks/DarkModeContext';
import AppNavigator from './AppNavigator';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      let settings = await AsyncStorage.getItem('settings');
      try {
        settings = JSON.parse(settings);
        setDarkMode(settings.darkMode);
      } catch (e) {}
    }
    loadSettings();
  }, []);

  function toggleDarkMode() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    AsyncStorage.setItem(
      'settings',
      JSON.stringify({ darkMode: newMode })
    );
  }

  const statusBar = darkMode ? 'light' : 'dark';
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StatusBar style={statusBar} />
      <AppNavigator darkMode={darkMode} />
    </DarkModeContext.Provider>
  );
}
