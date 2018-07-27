//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

/*export default class App extends React.Component {*/
  //render() {
    //return (
      //<View style={styles.container}>
        //<Text>hello world!</Text>
        //<Text>Changes you make will automatically reload.</Text>
        //<Text>Shake your phone to open the developer menu.</Text>
      //</View>
    //);
  //}
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
/*});*/
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

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
      <View>
        <Text>{this.state.score}</Text>
        <Button onPress={this.onButtonPress} title='+1' />
      </View>
    );
  }
}
