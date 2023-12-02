import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import Savedbutton from '../../SVG/ColorScheme/savedsvg';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function CameraDisplay() {
  const cameraRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(0.3);
  const [selectedColor, setSelectedColor] = useState('white');
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    const handleFocus = navigation.addListener('focus', () => {
      if (cameraRef.current) {
        cameraRef.current.resumePreview();
      }
    });

    return () => {
      handleFocus();
    };
  }, [navigation]);

  const handleColorSavedPress = () => {
    navigation.navigate('ColorSaved');
  };

  const handleVerticalRectanglePress = (color) => {
    setSelectedColor(color);
  };

  const VerticalRectangle = ({ color }) => (
    <TouchableOpacity
      style={[styles.verticalRectangle, { backgroundColor: color }]}
      onPress={() => handleVerticalRectanglePress(color)}
    >
      <View style={styles.savedButtonContainer}>
        <TouchableOpacity onPress={handleColorSavedPress}>
          <Savedbutton width={30} height={30} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.rectangleContainer, { backgroundColor: selectedColor }]}>
        {/* Rectangle Container */}
      </View>

      <View style={styles.verticalRectanglesContainer}>
        <VerticalRectangle color="#5E6E7A" />
        <VerticalRectangle color="#6C7141" />
        <VerticalRectangle color="#406446" />
        <VerticalRectangle color="#AC6E3B" />
        <VerticalRectangle color="#C6787A" />
        <VerticalRectangle color="#786077" />
      </View>

      <Text style={styles.text}>Soft Autumn scheme</Text>
      <Text style={styles.colorBarText}>Color bar</Text>
      <Svg height="2" width="194" style={styles.lineContainer}>
        <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1="-0.499997"
            y1="0.999675"
            x2="193.5"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity="0.5" />
            <Stop offset="1" stopColor="#2A2D34" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Path d="M0 1L193.5 1" stroke="url(#paint0_linear_237_1125)" strokeWidth="0.5" />
      </Svg>

      <View style={styles.cameraContainer}>
        {isFocused && (
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.front}
            zoom={zoomLevel}
            ref={(ref) => {
              cameraRef.current = ref;
            }}
          />
        )}
      </View>

      <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
        <ArrowButtonLeft width={40} height={40} color="#5A534A" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F0EDE7',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#5A534A',
    top: 90,
    left: 40,
    position: 'absolute',
  },
  colorBarText: {
    color: '#5A534A',
    fontSize: 36,
    fontWeight: '500',
    top: 100,
    left: 40,
    position: 'absolute',
  },
  lineContainer: {
    position: 'absolute',
    top: 150,
    left: 40,
  },
  rectangleContainer: {
    width: 384,
    height: 432,
    flexShrink: 0,
    borderRadius: 20,
    top: 170,
    border: '1px solid #5A534A',
    position: 'absolute',
  },
  cameraContainer: {
    height: 160,
    width: 160,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    top: 300,
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  arrowButton: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
  verticalRectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 300,
  },
  verticalRectangle: {
    width: 50,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
    left: 3,
  },
  savedButtonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 10,
    width: '100%',
  },
});
