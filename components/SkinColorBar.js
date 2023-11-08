import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { Camera } from 'expo-camera';

const SkinColorBar = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  useEffect(() => {
    async function checkCameraPermission() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status);
    }
    checkCameraPermission();
  }, []);

  return fontLoaded && cameraPermission === 'granted' ? (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Skin Color Bar</Text>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.border} />
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={Camera.Constants.Type.front} />
        </View>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 20,
    marginTop: -300,
  },
  icon: {
    width: 121,
    height: 89,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#5A534A',
    fontSize: 36,
    fontFamily: 'Familjen Grotesk',
    fontWeight: '600',
  },
  borderContainer: {
    width: 380,
    height: 246,
    borderRadius: 20,
    overflow: 'hidden',
  },
  border: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5A534A',
    borderRadius: 20,
  },
  cameraContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 150,
    height: 150,
    borderRadius: 1000, // Make it oval
  },
});

export default SkinColorBar;
