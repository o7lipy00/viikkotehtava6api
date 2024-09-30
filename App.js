import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Ketunhakija from './components/Ketunhakija';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kettu generattori</Text>
      <Ketunhakija />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;