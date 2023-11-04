import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function Logo() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Georama': require('../assets/fonts/Georama-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return fontLoaded ? (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      <Text style={styles.subtext}>Discover your True Colors</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
  },
  logoImage: {
    width: 368,
    height: 225,
    borderRadius: 24,
  },
  subtext: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Georama',
    fontWeight: '400',
  },
});
