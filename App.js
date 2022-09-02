/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragmaent, Component} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.hello}>Hello,world!</Text>
      <Photo type= '1' />
      <Photo type= '2' />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //위아래 중간 맞추기
    alignItems: 'center', //좌우 중간 맞추기
  },
  hello: {
    color: 'red',
  },
});

function Photo(props) {
  let dollmg = '';
  if (props.type ==='1'){
    dollmg = require('./assets/1.jpeg');
  } else if (props.type ==='2'){
    dollmg = require('./assets/2.jpeg');
  }

  return(
    <View>
      <Image source={dollmg} style={{width: 100, height: 100}}/>
    </View>
  )
}

export default App;
