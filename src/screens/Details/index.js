import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/Button';

export function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEXTO A DEFINIR</Text>
      <Button title="Limpar valores" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
