import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from './scr/components/title';

export default function App() {
  return (
    <LinearGradient
      colors={['#00FFFF', '#1782AF']} 
      style={styles.container}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Title />
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
