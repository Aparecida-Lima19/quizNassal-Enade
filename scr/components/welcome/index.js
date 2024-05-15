import React from "react";
import {View, Text } from "react-native"


export default function Welcome(){
    return(
        <View style={styles.contaniner}>
            <Text>Portal do QUIZ</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
