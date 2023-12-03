import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from './scalingUtils'; // Import scaling functions

import { db } from "../services/firebase";
import { getDocs, query, collection, where } from 'firebase/firestore';



export default function Display() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Georama': require('../assets/fonts/Georama-Regular.ttf'),
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    
    loadFont();
  }, []);

  if (!fontLoaded) {
    // Return a loading component or null while the font is loading
    return null;
  }

  const handleLogIn = () => {
    navigation.navigate('MyProfile');
  };

  const handleCreateAccount = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };

  return (
    <View style={styles.container}>
      {/* Logo Component */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.subtext}>Discover your True Colors</Text>
      </View>

      {/* Input Component */}
      <View style={styles.inputGroup}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.emailInput}
            placeholderTextColor="rgba(42, 45, 52, 0.50)"
          />
        </View>
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.passwordInput}
            placeholderTextColor="rgba(42, 45, 52, 0.50)"
            secureTextEntry
          />
        </View>
      </View>

      {/* LogIn Component */}
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogIn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Create Account Component */}
      <View style={styles.account}>
        <Text style={styles.newUserText}>New user?</Text>
        <Text style={styles.space}> &nbsp;</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
    alignItems: 'center',
    paddingTop: verticalScale(50),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  logoImage: {
    width: moderateScale(368),
    height: moderateScale(225),
    borderRadius: moderateScale(24),
  },
  subtext: {
    color: '#000',
    fontSize: moderateScale(18),
    fontFamily: 'Georama',
    fontWeight: '400',
  },
  inputGroup: {
    paddingTop: verticalScale(10),
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  label: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontSize: moderateScale(11),
    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    marginBottom: verticalScale(5),
  },
  emailInput: {
    width: moderateScale(312),
    height: verticalScale(35),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    paddingLeft: moderateScale(10),
  },
  passwordInput: {
    width: moderateScale(312),
    height: verticalScale(35),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    paddingLeft: moderateScale(10),
  },
  loginContainer: {
    width: moderateScale(312),
    height: verticalScale(25),
    borderRadius: moderateScale(6),
    backgroundColor: '#5A534A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  loginText: {
    fontSize: moderateScale(10),
    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    color: '#F0EDE7',
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: moderateScale(18),
    marginLeft: moderateScale(200),
    marginRight: moderateScale(10),
    marginBottom: verticalScale(300),
    marginTop: verticalScale(40),
  },
  newUserText: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(10),
    fontWeight: '500',
  },
  space: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(10),
    fontWeight: '500',
  },
  createAccountText: {
    color: '#4A4238',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(10),
    fontWeight: '500',
  },
});
