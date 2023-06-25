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
      </SafeAreaView>
      </ScrollView>
    </View>
  );
}

