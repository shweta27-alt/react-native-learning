import React from "react";
import { View, Text } from "react-native";
import {Button} from 'react-native-paper'

const Home = () => {
  return (
    <View>
      <Text style={{marginTop: 50}}>Home</Text>
      <Button style={{backgroundColor:"red"}} onPress={()=>console.log("press")}>Click Me</Button>
    </View>
  );
};

export default Home