import React from 'react';
import { View, Text } from 'react-native';

const Pergunta = ({ pergunta }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{pergunta.texto}</Text>
    </View>
  );
};

export default Pergunta;