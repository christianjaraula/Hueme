import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraDisplay() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(0.3); // Set the initial zoom level (e.g., zoomed in)

  useEffect(() => {
    const initCamera = async () => {
      const cameraStatus = await requestCameraPermissions();

      if (cameraStatus === PermissionsAndroid.RESULTS.GRANTED) {
        if (cameraRef.current) {
          cameraRef.current.resumePreview();
          // Set the initial zoom level
          cameraRef.current.zoom = zoomLevel;
        }
      }
    };

    initCamera();

    return () => {
      if (cameraRef.current) {
        cameraRef.current.pausePreview();
      }
    };
  }, [zoomLevel]);

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

      setHasCameraPermission(cameraStatus);
      return cameraStatus;
    } catch (err) {
      console.error('Error requesting camera permission:', err);
      return null;
    }
  };

  if (hasCameraPermission !== PermissionsAndroid.RESULTS.GRANTED) {
    return <View />;
  }

  return (
    <View style={styles.preview}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.front}
          zoom={zoomLevel}
          ref={(ref) => {
            cameraRef.current = ref;
          }}
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
