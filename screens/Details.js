import React from 'react';
import { Button, Text, View } from 'react-native';

export default class Details extends React.Component {
  render() {
    const title = this.props.route.params.title;
    const navigation = this.props.navigation;
    return (
      <View>
        <Text style={{ marginTop: 100 }}>{title}</Text>
        <Button
          title="Bearbeiten"
          onPress={() =>
            navigation.navigate('Edit', { title: title })
          }
        />
      </View>
    );
  }
}
