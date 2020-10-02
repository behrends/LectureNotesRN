import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// Alternativ können Function components mit Hooks state haben (useState)
export default class Content extends React.Component {
  // 1: initiale Zustand der Komponente (state)
  state = { selected: false };

  render() {
    let selectedStyle = null;
    // 2: lesender Zugriff auf Eigenschaften des Zustands (this.state)
    const currentState = this.state.selected;
    if (currentState)
      selectedStyle = { backgroundColor: 'lightgreen' };

    // 3: State/Zustand wird verändert mit this.setState({....})
    // ändert sich der state, dann wird die Komponente neu dargestellt
    // d.h. render() wird vom Framework automatisch aufgerufen
    // --> nie auf state direkt zugreifen (NICHT -> this.state.selected = true)
    // state IMMER mit dem Aufruf von this.setState({}) ändern
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
