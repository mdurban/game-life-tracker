import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, ImageBackground, Text, View, Button } from 'react-native';

export default class LifeTracker extends Component {
  constructor(props) {
    super(props)

    this.state = { score: 20, dieRoll: '20' }
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
        <ImageBackground source={require('./cradle-opaque.jpg')} style={styles.imageBackground}>
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
          <Text style={styles.roll} onPress={() => this.rollDie()}><Text>Roll d20: </Text><Text style={styles.dieRoll}>{this.state.dieRoll}</Text></Text>
        </View>
      </View>
    )
  }
}

// red: #974B45, blue: #8CBFD3, background: #A67F43, dice: #BAA498
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
  dieRoll: {
    fontWeight: 'bold'
  },
  imageBackground: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  roll: {
    alignSelf: 'center',
    backgroundColor: 'white',
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    borderWidth: 2.0,
    width: '100%',
  },
  negButtonRight: {
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
  negButtonLeft: {
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
  posButtonRight: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    backgroundColor: '#8CBFD3',
    borderWidth: 3.0,
    borderColor: '#2c2d30',
    color: '#2c2d30'
  }
  posButtonLeft: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 82,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    backgroundColor: '#8CBFD3',
    borderWidth: 3.0,
    borderColor: '#2c2d30',
    color: '#2c2d30'
  }
})

