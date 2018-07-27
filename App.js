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
        <View style={styles.grid}>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-1)}>-1</Text>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-5)}>-5</Text>
        </View>
        <View style={styles.grid}>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(1)}>1</Text>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(5)}>5</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: 'cyan',
    justifyContent: 'center',
  },
  score: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 200,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  grid: {
    flexDirection: 'row'
  },
  negButton: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    textAlign: 'center',
    backgroundColor: 'red',
    borderWidth: 2.0
  },
  posButton: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    textAlign: 'center',
    backgroundColor: 'blue',
    borderWidth: 2.0
  }
})

