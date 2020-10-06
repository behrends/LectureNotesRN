import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Details({ route, navigation }) {
  const note = route.params.note;
  return (
    <View>
      <Text style={{ marginTop: 100 }}>{note.title}</Text>
      <Button
        title="Bearbeiten"
        onPress={() => navigation.navigate('Edit', { note: note })}
      />
    </View>
  );
}
