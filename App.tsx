import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
    const [count,setCount] = useState(0);
    return (
      <View style={styles.container}>
      <Button title='-1' onPress={()=>setCount(count-1)} />
      <Text style={{fontSize:50}}>{count}</Text>
      <Button title='+1' onPress={()=>setCount(count+1)} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
