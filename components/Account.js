import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Account() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation(); // Get the navigation object using useNavigation

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  // Define the function to handle navigation
  const handleCreateAccount = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };

  return fontLoaded ? (
    <View style={styles.account}>
      <Text style={styles.newUserText}>New user?</Text>
      <Text style={styles.space}> &nbsp;</Text>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    marginLeft: 200,
    marginRight: 10,
    marginBottom: 300,
    marginTop: 40,
  },
  newUserText: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
  },
  space: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
  },
  createAccountText: {
    color: '#4A4238',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
  },
});
