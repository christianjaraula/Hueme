import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraDisplay() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    requestCameraPermissions();
  }, []);

  const requestCameraPermissions = async () => {
    try {
      const cameraStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonPositive: 'OK',
        },
      );

      setHasCameraPermission(cameraStatus === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.error('Error requesting camera permission:', err);
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  }

  return (
    <View style={styles.preview}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.front}
          ratio={'16:9'}
          ref={cameraRef}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    height: 160,
    width: 160,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
