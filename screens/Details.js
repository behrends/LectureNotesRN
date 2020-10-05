import React from 'react';
import { Text } from 'react-native';

export default function Details({ route }) {
  const title = route.params.title;
  return <Text style={{ marginTop: 100 }}>{title}</Text>;
}
