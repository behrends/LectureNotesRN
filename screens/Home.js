import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const noteList = [
  { id: '1', title: 'Notiz' },
  { id: '2', title: 'Bemerkung' },
  { id: '3', title: 'Witz' },
];

export default function Home({ navigation }) {
  // const navigation = props.navigation; dies passiert in ({navigation})
  return (
    <View style={styles.container}>
      <FlatList
        data={noteList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
