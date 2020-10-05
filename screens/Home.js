import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Home({ navigation }) {
  // const navigation = props.navigation; dies passiert in ({navigation})
  return (
    <View style={styles.container}>
      <Button
        title="Notiz 1"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Notiz 2"
        onPress={() => navigation.navigate('Details')}
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
