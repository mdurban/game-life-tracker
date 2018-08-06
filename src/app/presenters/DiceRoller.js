import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, ImageBackground, Text, View, Button } from 'react-native';

export default class DiceRoller extends Component {
  constructor(props) {
    super(props)

    this.state = { dieRoll: this.props.numberOfSides }
    this.rollDie = this.rollDie.bind(this)
  }
  
  rollDie(numberOfSides) {
    min = Math.ceil(1)
    max = Math.floor(numberOfSides)

    this.setState({dieRoll: Math.floor(Math.random() * (max - min + 1) + min)})
  }

  render() {
    return (
      <Text style={styles.roll} onPress={() => this.rollDie(this.props.numberOfSides)}>
        <Text>Roll d{this.props.numberOfSides}: </Text>
        <Text style={styles.dieRoll}>{this.state.dieRoll}</Text>
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  dieRoll: {
    fontWeight: 'bold'
  },
  roll: {
    alignSelf: 'center',
    backgroundColor: 'white',
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    borderWidth: 2.0,
    width: '100%',
  }
})

