import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import Savedbutton from '../../SVG/ColorScheme/savedsvg';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from '../../scalingUtils'; 


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
        <VerticalRectangle color="#3C2A26" />
        <VerticalRectangle color="#193023" />
        <VerticalRectangle color="#33321F" />
        <VerticalRectangle color="#121D2E" />
        <VerticalRectangle color="#231829" />
        <VerticalRectangle color="#441321" />
      </View>

      <Text style={styles.text}>Dark Winter scheme</Text>
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
    top: moderateScale(90),
    left: moderateScale(40),
    position: 'absolute',
  },
  colorBarText: {
    color: '#5A534A',
    fontSize: moderateScale(36),
    fontWeight: '500',
    top: moderateScale(100),
    left: moderateScale(40),
    position: 'absolute',
  },
  lineContainer: {
    position: 'absolute',
    top: moderateScale(150),
    left: moderateScale(40),
  },
  rectangleContainer: {
    width: moderateScale(330),
    height: verticalScale(370),
    flexShrink: 0,
    borderRadius: moderateScale(20),
    top: verticalScale(150),
    border: '1px solid #5A534A',
    position: 'absolute',
  },
  cameraContainer: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(100),
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    top: verticalScale(260),
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  arrowButton: {
    position: 'absolute',
    top: verticalScale(60),
    right: moderateScale(40),
  },
  verticalRectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: verticalScale(260),
  },
  verticalRectangle: {
    width: moderateScale(45),
    height: verticalScale(150),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
    left: moderateScale(5),
  },
  savedButtonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: moderateScale(10),
    width: '100%',
  },
});