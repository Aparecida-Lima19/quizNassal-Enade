import React from "react";
import { StatusBar} from "react-native"

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./scr/routes";


export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="linght-content" />
      <Routes/>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    //tenho que colocar o degrade ainda...
    alignItems: 'center',
    justifyContent: 'center',
  },
});
