import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { score: 20 }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(value) {
    this.setState({ score: this.state.score + value })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>{this.state.score}</Text>
        <Text style={styles.negButton} onPress={() => this.onButtonPress(-1)}>-1</Text>
        <Text style={styles.negButton} onPress={() => this.onButtonPress(-5)}>-5</Text>
        <Text style={styles.posButton} onPress={() => this.onButtonPress(1)}>1</Text>
        <Text style={styles.posButton} onPress={() => this.onButtonPress(5)}>5</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: 'cyan'
  },
  score: {
    flex: 2,
    fontSize: 108,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  negButton: {
    flex: 1,
    backgroundColor: 'red'
  },
  posButton: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

