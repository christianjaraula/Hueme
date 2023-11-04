import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function LogIn() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return fontLoaded ? (
    <View style={styles.loginGroup}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.login}>Log In</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  loginGroup: {
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    width: 312,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#5A534A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 10,
    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    color: '#EEE7DA',
  },
});
