import React from "react";
import { View, Text } from "react-native"
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one';
import AppLoading from 'expo-app-loading';

export default function Usuario(){
    let [fontsLoaded] = useFonts({
        FasterOne_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'FasterOne_400Regular',
      fontSize: 45,
    },
  });