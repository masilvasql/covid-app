import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Rotas from './src/Routes';

export default function App() {
  return (

    <View style={estilo.principal}>
      <StatusBar />
      <Rotas />
    </View>
  );
}

const estilo = StyleSheet.create({
  principal: {
    flex: 1,
  }
})