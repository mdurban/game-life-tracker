import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { score: 20 }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    this.setState({ score: this.state.score + 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.score}</Text>
        <Button onPress={this.onButtonPress} title='+1' />
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

