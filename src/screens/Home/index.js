import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../components/Button';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TextInput style={styles.input} onChange={() => {}} value={'abc'} />
      <Button title="Calcular" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
    borderColor: '#A370F7',
    borderWidth: 2,
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 4,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
