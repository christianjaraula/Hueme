import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Camera } from 'expo-camera';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import ColorBar1Active from './SVG/SkinColorBarIcon/ColorBar1Active';
import ColorBar2Active from './SVG/SkinColorBarIcon/ColorBar2Active';
import ColorBar3Active from './SVG/SkinColorBarIcon/ColorBar3Active';
import ColorBar4Active from './SVG/SkinColorBarIcon/ColorBar4Active';
import ColorBar5Active from './SVG/SkinColorBarIcon/ColorBar5Active';
import ColorBar6Active from './SVG/SkinColorBarIcon/ColorBar6Active';
import ColorBar7Active from './SVG/SkinColorBarIcon/ColorBar7Active';
import ColorBar8Active from './SVG/SkinColorBarIcon/ColorBar8Active';
import ColorBar1 from './SVG/SkinColorBarIcon/ColorBar1 ';
import ColorBar2 from './SVG/SkinColorBarIcon/ColorBar2';
import ColorBar3 from './SVG/SkinColorBarIcon/ColorBar3';
import ColorBar4 from './SVG/SkinColorBarIcon/ColorBar4';
import ColorBar5 from './SVG/SkinColorBarIcon/ColorBar5';
import ColorBar6 from './SVG/SkinColorBarIcon/ColorBar6';
import ColorBar7 from './SVG/SkinColorBarIcon/ColorBar7';
import ColorBar8 from './SVG/SkinColorBarIcon/ColorBar8';
import ArrowButtonLeft from './SVG/NavigationIcon/ArrowButtonLeft';
import ArrowButtonRight from './SVG/NavigationIcon/ArrowButtonRight';
import CameraDisplay from './SkinColorBarComponents/CameraDisplay';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from './scalingUtils'; // Import the scaling utilities

const { width, height } = Dimensions.get('window');

const SkinColorBar = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();

    // Move the camera permission logic to the main useEffect
    async function checkCameraPermission() {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(status);
      } catch (error) {
        console.error('Error requesting camera permission:', error);
      }
    }

    checkCameraPermission();
  }, []);

  useEffect(() => {
    // Check if the component is navigated to from Templates
    const params = route.params || {};
    if ('cameraVisible' in params) {
      setCameraVisible(params.cameraVisible);
    }
  }, [route]);

  const renderBorderColor = () => {
    if (active1) {
      return { backgroundColor: '#F5D3B8' }; // Replace with the desired color
    } else if (active2) {
      return { backgroundColor: '#EECEA8' }; // Replace with the desired color
    } else if (active3) {
      return { backgroundColor: '#F1C693' }; // Replace with the desired color
    } else if (active4) {
      return { backgroundColor: '#DCB991' }; // Replace with the desired color
    } else if (active5) {
      return { backgroundColor: '#DDA872' }; // Replace with the desired color
    } else if (active6) {
      return { backgroundColor: '#C6944F' }; // Replace with the desired color
    } else if (active7) {
      return { backgroundColor: '#BD7E48' }; // Replace with the desired color
    } else if (active8) {
      return { backgroundColor: '#855225' }; // Replace with the desired color
    } else {
      return { backgroundColor: '#F0EDE7' }; // Default color when no button is active
    }
  };

  const handleIconClick = () => {
    setActive1(!active1);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick2 = () => {
    setActive2(!active2);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick3 = () => {
    setActive3(!active3);
    setActive1(false);
    setActive2(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick4 = () => {
    setActive4(!active4);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick5 = () => {
    setActive5(!active5);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick6 = () => {
    setActive6(!active6);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick7 = () => {
    setActive7(!active7);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive8(false);
  };

  const handleIconClick8 = () => {
    setActive8(!active8);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };

  const renderSvg = () => (active1 ? <ColorBar1Active /> : <ColorBar1 />);
  const renderSvg2 = () => (active2 ? <ColorBar2Active /> : <ColorBar2 />);
  const renderSvg3 = () => (active3 ? <ColorBar3Active /> : <ColorBar3 />);
  const renderSvg4 = () => (active4 ? <ColorBar4Active /> : <ColorBar4 />);
  const renderSvg5 = () => (active5 ? <ColorBar5Active /> : <ColorBar5 />);
  const renderSvg6 = () => (active6 ? <ColorBar6Active /> : <ColorBar6 />);
  const renderSvg7 = () => (active7 ? <ColorBar7Active /> : <ColorBar7 />);
  const renderSvg8 = () => (active8 ? <ColorBar8Active /> : <ColorBar8 />);

  const handleNavigateToTemplates = () => {
    setCameraVisible(false);
    navigation.navigate('Templates');
  };

  return fontLoaded && cameraPermission === 'granted' ? (
    <View style={styles.container}>
      {/* <View style={styles.iconContainer}>
        <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
      </View> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Skin Color Bar</Text>
      </View>
      <Svg height={verticalScale(2)} width={scale(194)} style={styles.lineContainer}>
        <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1="-0.499997"
            y1="0.999675"
            x2={scale(193.5)}
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity="0.5" />
            <Stop offset="1" stopColor="#2A2D34" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Path d={`M0 1L${scale(193.5)} 1`} stroke="url(#paint0_linear_237_1125)" strokeWidth={scale(0.5)} />
      </Svg>
      <View style={styles.borderContainer}>
        <View style={[styles.border, renderBorderColor()]} />
        {cameraVisible && (
          <View style={styles.cameraContainer}>
            <CameraDisplay />
          </View>
        )}
      </View>
      <Text style={styles.skinColorText}>Skin Color</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleIconClick} style={styles.iconContainerStyle}>
          {renderSvg()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick2} style={styles.iconContainerStyle2}>
          {renderSvg2()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick3} style={styles.iconContainerStyle3}>
          {renderSvg3()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick4} style={styles.iconContainerStyle4}>
          {renderSvg4()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick5} style={styles.iconContainerStyle5}>
          {renderSvg5()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick6} style={styles.iconContainerStyle6}>
          {renderSvg6()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick7} style={styles.iconContainerStyle7}>
          {renderSvg7()}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIconClick8} style={styles.iconContainerStyle8}>
          {renderSvg8()}
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
          <ArrowButtonLeft width={scale(40)} height={scale(40)} color="#5A534A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToTemplates} style={styles.arrowButton2}>
          <ArrowButtonRight width={scale(40)} height={scale(40)} color="#5A534A" />
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: verticalScale(1),
    top: verticalScale(-10),
  },
  icon: {
    width: scale(100),
    height: verticalScale(90),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(5),
    marginRight: scale(140),
  },
  text: {
    color: '#5A534A',
    fontSize: moderateScale(25),
    fontWeight: '600',
  },
  borderContainer: {
    width: scale(310),
    height: verticalScale(246),
    borderRadius: scale(20),
    overflow: 'hidden',
  },
  border: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: scale(1),
    borderColor: '#5A534A',
    borderRadius: scale(20),
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
    width: scale(150),
    height: verticalScale(150),
    borderRadius: scale(75),
    overflow: 'hidden',
  },
  skinColorText: {
    color: 'rgba(74, 66, 56, 0.75)',
    fontSize: moderateScale(10),
    fontWeight: '500',
    right: scale(130),
    marginTop: verticalScale(20),
  },
  lineContainer: {
    marginBottom: verticalScale(20),
    right: scale(55),
  },
  iconContainerStyle: {
    marginLeft: scale(215),
    right: scale(125),
    marginTop: verticalScale(10),
  },
  iconContainerStyle2: {
    right: scale(120),
    marginTop: verticalScale(10),
  },
  iconContainerStyle3: {
    right: scale(115),
    marginTop: verticalScale(10),
  },
  iconContainerStyle4: {
    right: scale(110),
    marginTop: verticalScale(10),
  },
  iconContainerStyle5: {
    right: scale(105),
    marginTop: verticalScale(10),
  },
  iconContainerStyle6: {
    right: scale(100),
    marginTop: verticalScale(10),
  },
  iconContainerStyle7: {
    right: scale(95),
    marginTop: verticalScale(10),
  },
  iconContainerStyle8: {
    right: scale(90),
    marginTop: verticalScale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(1),
    marginBottom: verticalScale(20),
  },
  arrowButton: {
    position: 'absolute',
    marginTop: verticalScale(190),
    left: scale(110),
  },
  arrowButton2: {
    position: 'absolute',
    marginTop: verticalScale(190),
    right: scale(110),
  },
});

export default SkinColorBar;

