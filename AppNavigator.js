import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import * as Icon from '@expo/vector-icons';

import Home from './screens/Home';
import Photos from './screens/Photos';
import Settings from './screens/Settings';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Create from './screens/Create';

const Tab = createBottomTabNavigator();

enableScreens();
const Stack = createNativeStackNavigator();

export default ({ darkMode }) => {
  function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: darkMode ? 'blueviolet' : 'lavender',
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ title: 'Notizen', headerLargeTitle: true }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Notiz' }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: 'Notiz bearbeiten',
            stackAnimation: 'flip',
            stackPresentation: 'modal',
          }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            title: 'Neue Notiz',
            stackAnimation: 'flip',
            stackPresentation: 'modal',
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Photos') {
              icon = focused ? 'image' : 'image-outline';
            } else if (route.name === 'Settings') {
              icon = focused ? 'settings' : 'settings-outline';
            }

            return (
              <Icon.MaterialCommunityIcons
                name={icon}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: darkMode ? 'lavender' : 'blueviolet',
          style: {
            backgroundColor: darkMode ? 'blueviolet' : 'lavender',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: 'Notizen' }}
        />
        <Tab.Screen
          name="Photos"
          component={Photos}
          options={{ title: 'Fotos' }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Einstellungen' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
