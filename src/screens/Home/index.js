import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/Button';
import {decrement, increment} from '../../redux/reducers/counter';

export function Home({navigation}) {
  const count = useSelector(state => state.counter.total);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TextInput style={styles.input} onChange={() => {}} value={'abc'} />
      <Button title="Calcular" onPress={() => navigation.navigate('Details')} />
      <View style={{paddingVertical: 24}}>
        <Text style={styles.title}> Contador: {count}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Somar" onPress={() => dispatch(increment())} />
        <Button title="Diminuir" onPress={() => dispatch(decrement())} />
      </View>
      <View style={{paddingVertical: 24}}>
        <Text style={styles.title}> useState: {value}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Somar" onPress={() => setValue(prev => prev + 1)} />
        <Button title="Diminuir" onPress={() => setValue(prev => prev - 1)} />
      </View>
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
