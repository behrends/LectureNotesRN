import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Icon from '@expo/vector-icons';

import Home from './screens/Home';
import Photos from './screens/Photos';
import Settings from './screens/Settings';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Create from './screens/Create';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'lavender' },
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

export default function App() {
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
          activeTintColor: 'blueviolet',
          style: { backgroundColor: 'lavender' },
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
}
