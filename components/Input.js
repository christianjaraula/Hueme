import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Font from 'expo-font';

export default function Input() {
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

  if (!fontLoaded) {
    // You can return a loading component or null while the font is loading
    return null;
  }

  return (
    <View style={styles.inputGroup}>
      {/* Email Input */}
      <View style={styles.container}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.emailInput}
          placeholderTextColor="rgba(42, 45, 52, 0.50)"
        />
      </View>
      {/* Password Input */}
      <View style={styles.container}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.passwordInput}
          placeholderTextColor="rgba(42, 45, 52, 0.50)"
          secureTextEntry
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    paddingTop: 10,
  },
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontSize: 11,
    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    marginBottom: 5, // Adjust this value to control the spacing between the label and input
  },
  emailInput: {
    width: 312,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    paddingLeft: 10,
  },
  passwordInput: {
    width: 312,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    paddingLeft: 10,
  },
 
});

