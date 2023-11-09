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
import ColorBar1  from './SVG/SkinColorBarIcon/ColorBar1 ';
import ColorBar2 from './SVG/SkinColorBarIcon/ColorBar2';
import ColorBar3 from './SVG/SkinColorBarIcon/ColorBar3';
import ColorBar4 from './SVG/SkinColorBarIcon/ColorBar4';
import ColorBar5 from './SVG/SkinColorBarIcon/ColorBar5';
import ColorBar6 from './SVG/SkinColorBarIcon/ColorBar6';
import ColorBar7 from './SVG/SkinColorBarIcon/ColorBar7';
import ColorBar8 from './SVG/SkinColorBarIcon/ColorBar8';
import ArrowButtonLeft from './SVG/NavigationIcon/ArrowButtonLeft'; // Import your icon component

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

  const navigation = useNavigation(); // Get the navigation object

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
      return { backgroundColor: '#EEE7DA' }; // Default color when no button is active
    }
  };
  const handleIconClick = () => {
    setActive1(!active1);
    setActive2(false); // Deactivate icon2
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick2 = () => {
    setActive2(!active2);
    setActive1(false); // Deactivate icon1
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick3 = () => {
    setActive3(!active3);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick4 = () => {
    setActive4(!active4);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };
  const handleIconClick5 = () => {
    setActive5(!active5);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick6 = () => {
    setActive6(!active6);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive7(false);
    setActive8(false);
  };

  const handleIconClick7 = () => {
    setActive7(!active7);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive8(false);
  };

  const handleIconClick8 = () => {
    setActive8(!active8);
    setActive1(false); // Deactivate icon1
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
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

  const renderSvg5 = () => {
    if (active5) {
      return <ColorBar5Active/>;
    } else {
      return <ColorBar5 />;
    }
  };

  const renderSvg6 = () => {
    if (active6) {
      return <ColorBar6Active/>;
    } else {
      return <ColorBar6 />;
    }
  };

  const renderSvg7 = () => {
    if (active7) {
      return <ColorBar7Active/>;
    } else {
      return <ColorBar7 />;
    }
  };
  
  const renderSvg8 = () => {
    if (active8) {
      return <ColorBar8Active/>;
    } else {
      return <ColorBar8 />;
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
        <View style={[styles.border, renderBorderColor()]} />
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
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowButtonLeft width={40} height={40} color='#5A534A' />
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
    borderRadius: 75, // Make it a perfect circle by setting borderRadius to half of the width and height
    overflow: 'hidden', // Add this line to ensure the circular shape is maintained
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
    marginLeft: 215,
    right: 125,
    marginTop: 10,
  },
  iconContainerStyle2: {
    right: 120,
    marginTop: 10,
  },
  iconContainerStyle3: {
    right: 115,
    marginTop: 10,
  },
  iconContainerStyle4: {
    right: 110,
    marginTop: 10,
  },
  iconContainerStyle5: {
    right: 105,
    marginTop: 10,
  },
  iconContainerStyle6: {
    right: 100,
    marginTop: 10,
  },
  iconContainerStyle7: {
    right: 95,
    marginTop: 10,
  },
  iconContainerStyle8: {
    right: 90,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop: 10,
    marginBottom: 20,
  },
  arrowButton: {
    position: 'absolute',
    marginTop: 240,
    left: 105,
  },
});

export default SkinColorBar;
