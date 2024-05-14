import React from "react";
import {View, Text } from "react-native"

import styles from "./style";
import { useFonts } from 'expo-font';
export default function Title(){
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
      });
      
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ENADE</Text>         
        </View>
    )
}

// Este é otitulo do app