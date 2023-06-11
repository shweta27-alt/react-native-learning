import { SafeAreaView, View , Image, TextInput, Button, Switch , ToastAndroid, ScrollView} from 'react-native';
import {useState} from 'react';
import Home from './Screens/Home'

export default function App() {
  const [active , setActive] = useState(false)
  const showToast = () =>{
    ToastAndroid.show("Hey I'm toast please do remember me", ToastAndroid.SHORT)
  }
  return (
    <View>
      <ScrollView>
      <SafeAreaView>
      <Home/>
      <Image source={{uri:"https://en.wikipedia.org/wiki/Blue-and-yellow_macaw#/media/File:Blue-and-Yellow-Macaw.jpg"}} style={{width:100, height:100,backgroundColor:"red"}}/>
      <TextInput style={{backgroundColor:"blue"}}/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Button title="Click me" onPress={showToast} color="pink"/>
      <Button title="Click me" onPress={showToast} color="black"/>
      <Button title="Click me" onPress={showToast} color="red"/>
      <Button title="Click me" onPress={showToast} color="yellow"/>
      <Switch value={active} onChange={()=>{setActive( (prev)=> !prev)}}/>
      </SafeAreaView>
      </ScrollView>
    </View>
  );
}

