import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  // const increment = () => {
  //   setNumber(number + 1);
  // };

  const increment = useCallback(()=>{
    // alert(number)
    setNumber(number + 1)
  })

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable onPress={increment}>
          <Text style={styles.title}> + </Text>
        </Pressable>
        <Text style={styles.title} >{number}</Text>
        <Pressable onPress={decrement}>
          <Text style={styles.title}> - </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
