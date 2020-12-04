import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { DarkModeContext } from './hooks/DarkModeContext';
import AppNavigator from './AppNavigator';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  const statusBar = darkMode ? 'light' : 'dark';
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StatusBar style={statusBar} />
      <AppNavigator darkMode={darkMode} />
    </DarkModeContext.Provider>
  );
}
