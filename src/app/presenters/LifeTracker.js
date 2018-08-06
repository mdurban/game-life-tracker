import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import DiceRoller from './DiceRoller.js'

export default class LifeTracker extends Component {
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
        <ImageBackground source={require('../../assets/cradle-opaque.jpg')} style={styles.imageBackground}>
          <Text style={styles.score}>{this.state.score}</Text>
        </ImageBackground>
        <View style={styles.row}>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-1)}>-1</Text>
          <Text style={styles.negButton} onPress={() => this.onButtonPress(-5)}>-5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(1)}>1</Text>
          <Text style={styles.posButton} onPress={() => this.onButtonPress(5)}>5</Text>
        </View>
        <View style={styles.row}>
          <DiceRoller numberOfSides={20} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: '#e6ffff',
    justifyContent: 'center'
  },
  score: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 200,
    color: '#2c2d30',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageBackground: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  negButton: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
    backgroundColor: '#b4615b',
    borderWidth: 2.0,
    borderColor: '#2c2d30',
    color: '#2c2d30'
  },
  posButton: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    backgroundColor: '#8CBFD3',
    borderWidth: 2.0,
    borderColor: '#2c2d30',
    color: '#2c2d30'
  }
})

