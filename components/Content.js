import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// Alternativ können Function components mit Hooks state haben (useState)
export default class Content extends React.Component {
  // 1: initiale Zustand der Komponente (state)
  state = { selected: false };

  render() {
    let selectedStyle = { backgroundColor: 'orange' };
    // 2: lesender Zugriff auf Eigenschaften des Zustands (this.state)
    const currentState = this.state.selected;
    if (currentState === false) selectedStyle = null;

    // 3: State/Zustand wird verändert mit this.setState({....})
    return (
      <Pressable
        onPress={() => this.setState({ selected: !currentState })}
      >
        <Text style={[styles.content, selectedStyle]}>
          Inhalt der Notiz der auch sehr lang sein kann und über
          mehrere Zeilen geht
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});
