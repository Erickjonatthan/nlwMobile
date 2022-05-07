import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { Keyboard, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import Widget  from './src/components/Widget';
import { theme } from './src/theme';
import AppLoading from 'expo-app-loading';
import {useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function App() {
  const [fontsLoaded] = useFonts({

    Inter_400Regular,
    Inter_500Medium,

  })
  if (!fontsLoaded){
    return <AppLoading />; 
  }
  return (
    
    <KeyboardAvoidingView 
    behavior='padding'
    style={{
      flex : 1,
      backgroundColor: theme.colors.background,



    }}>
       
      <StatusBar
      backgroundColor='transparent'
      style="light" 
      translucent />
      
      <Widget />
     
    </KeyboardAvoidingView>

  );
}


