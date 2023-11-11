import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraDisplay() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.preview}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        ratio={'16:9'}
        ref={cameraRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    height: 200,
    width: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    height: 200,
    width: 200,
  },
});

