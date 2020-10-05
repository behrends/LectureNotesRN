import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NoteListItem from '../components/NoteListItem';

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
        style={styles.list}
        data={noteList}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() =>
              navigation.navigate('Details', { title: item.title })
            }
          />
        )}
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
  list: {
    paddingHorizontal: 10,
    width: '100%',
  },
});
