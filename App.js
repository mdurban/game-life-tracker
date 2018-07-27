import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { score: 20, dieRoll: '?' }
    this.onButtonPress = this.onButtonPress.bind(this)
    this.rollDie = this.rollDie.bind(this)
  }

  onButtonPress(value) {
    this.setState({ score: this.state.score + value })
  }

  rollDie() {
    min = Math.ceil(1)
    max = Math.floor(8)

    this.setState({dieRoll: Math.floor(Math.random() * (max - min + 1) + min)})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>{this.state.score}</Text>
        <View style={styles.row}>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-1)}>-1</Text>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-5)}>-5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(1)}>1</Text>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(5)}>5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.roll} onPress={() => this.rollDie()}>Roll Die</Text>
          <Text>{this.state.dieRoll}</Text>
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
  row: {
    flexDirection: 'row'
  },
  roll: {
    backgroundColor: 'white',
    fontSize: 40,
    textAlign: 'center',
    borderWidth: 2.0,
    height: 50
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

