import React from 'react';
import { Text, TextInput } from 'react-native';

export default class Edit extends React.Component {
  render() {
    const route = this.props.route;
    return (
      <Text style={{ marginTop: 100 }}>{route.params.title}</Text>
    );
  }
}
