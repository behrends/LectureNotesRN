import React from 'react';
import { Text } from 'react-native';

export default function Edit({ route }) {
  return <Text style={{ marginTop: 100 }}>{route.params.title}</Text>;
}
