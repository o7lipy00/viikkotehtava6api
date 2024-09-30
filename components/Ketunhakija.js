import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';

const Ketunhakija = () => {
  const [foxImage, setFoxImage] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const fetchFoxImage = () => {
    setLoading(true);
   
    fetch('https://randomfox.ca/floof/')
      .then((response) => response.json())
      .then((data) => {
        setFoxImage(data.image);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching fox image: ', error);
        
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFoxImage();
  }, []);

  return (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :  (
        <Image source={{ uri: foxImage }} style={styles.foxImage} />
      )}
      
      <TouchableOpacity style={styles.button} onPress={fetchFoxImage}>
        <Text style={styles.buttonText}>Uusi kettu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  foxImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default Ketunhakija;
