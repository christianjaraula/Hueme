import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Camera } from 'expo-camera';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ColorBar1Active from './SVG/SkinColorBarIcon/ColorBar1Active';
import ColorBar2Active from './SVG/SkinColorBarIcon/ColorBar2Active';
import ColorBar3Active from './SVG/SkinColorBarIcon/ColorBar3Active';
import ColorBar4Active from './SVG/SkinColorBarIcon/ColorBar4Active';
import ColorBar1  from './SVG/SkinColorBarIcon/ColorBar1 ';
import ColorBar2 from './SVG/SkinColorBarIcon/ColorBar2';
import ColorBar3 from './SVG/SkinColorBarIcon/ColorBar3';
import ColorBar4 from './SVG/SkinColorBarIcon/ColorBar4';


const SkinColorBar = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

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

  const handleIconClick = () => {
    setActive1(!active1);
    setActive2(false); // Deactivate icon2
    setActive3(false);
    setActive4(false);
  };

  const handleIconClick2 = () => {
    setActive2(!active2);
    setActive1(false); // Deactivate icon1
    setActive3(false);
    setActive4(false);
  };

  const handleIconClick3 = () => {
    setActive3(!active3);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive4(false);
  };

  const handleIconClick4 = () => {
    setActive4(!active4);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
  };


  const renderSvg = () => {
    if (active1) {
      return <ColorBar1Active />;
    } else {
      return <ColorBar1 />;
    }
  };
  const renderSvg2 = () => {
    if (active2) {
      return <ColorBar2Active/>;
    } else {
      return <ColorBar2 />;
    }
  };
  const renderSvg3 = () => {
    if (active3) {
      return <ColorBar3Active/>;
    } else {
      return <ColorBar3 />;
    }
  };

  const renderSvg4 = () => {
    if (active4) {
      return <ColorBar4Active/>;
    } else {
      return <ColorBar4 />;
    }
  };
  
  
  return fontLoaded && cameraPermission === 'granted' ? (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Skin Color Bar</Text>
      </View>
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
        <Path
          d="M0 1L193.5 1"
          stroke="url(#paint0_linear_237_1125)"
          strokeWidth="0.5"
        />
      </Svg>
      <View style={styles.borderContainer}>
        <View style={styles.border} />
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={Camera.Constants.Type.front} />
        </View>
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
    marginTop: -70,
  },
  icon: {
    width: 121,
    height: 89,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 160,
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
  skinColorText: {
    color: 'rgba(74, 66, 56, 0.75)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 15,
    fontWeight: '500',
    marginRight: 300,
    marginTop: 20,
  },
  lineContainer: {
    marginBottom: 20,
    marginRight: 170,
  },
  iconContainerStyle: {
    marginLeft: 60,
    right: 130,
    marginTop: 10,
  },
  iconContainerStyle2: {
    right: 120,
    marginTop: 10,
  },
  iconContainerStyle3: {
    right: 110,
    marginTop: 10,
  },
  iconContainerStyle4: {
    right: 100,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop: 10,
  },
});

export default SkinColorBar;
