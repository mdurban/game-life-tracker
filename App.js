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
        <Text>{this.state.score}</Text>
        <Button onPress={() => this.onButtonPress(-1)} title='-1' />
        <Button onPress={() => this.onButtonPress(-5)} title='-5' />
        <Button onPress={() => this.onButtonPress(1)} title='+1' />
        <Button onPress={() => this.onButtonPress(5)} title='+5' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: 'cyan'
  },
  button: {
    backgroundColor: 'green'
  }
})

