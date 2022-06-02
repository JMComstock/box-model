import React from 'react';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Box color='red'/>
    <Box color='green'/>
    <Box color='blue'/>
  </View>
);

export default App;

export const Box = (props) => (
  <View color={props.color} style={{ width:100, height: 100, backgroundColor: props.color }} />
);
