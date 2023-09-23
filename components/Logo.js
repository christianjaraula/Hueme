// Logo.js
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.subtext}>
        Discover your True Colors
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginTop: 100,// Center the logo and subtext horizontally
  },
  logoImage: {
    width: 368,
    height: 225,
    borderRadius: 24,
  },
  subtext: {
    flex: 1, // Adjust the spacing between logo and subtext as needed
    color: '#000',
    fontSize: 18,
    fontFamily: 'Georama',
    fontWeight: '400',
  },
});
