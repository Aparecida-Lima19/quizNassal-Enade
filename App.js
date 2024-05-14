import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from './scr/components/title';


export default function App() {
  return (

      <View style={styles.container}>
        <Title />
        
      </View>
    
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
