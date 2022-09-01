/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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

export default App;
