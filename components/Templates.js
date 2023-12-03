import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ArrowButtonLeft from './SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import Spring from './TemplatesComponents/Spring/Spring';
import Summer from './TemplatesComponents/Summer/Summer';
import Autumn from './TemplatesComponents/Autumn/Autumn';
import Winter from './TemplatesComponents/Winter/Winter';
import { Dimensions } from 'react-native';
import MyProfileIcon from './SVG/MyProfileIcons/MyProfileIcon';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export default function Templates({ }) {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          'Georama': require('../assets/fonts/Georama-Regular.ttf'),
          // Other fonts...
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const handleNavigateToMyProfle= () => {
    navigation.navigate('MyProfile', { cameraVisible: true });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToMyProfle}>
      <View style={styles.buttonIcon}></View>
      <MyProfileIcon width={moderateScale(20)} height={moderateScale(23)} color="#F0EDE7" />
      </TouchableOpacity>
      <View>
        <Text style={[styles.colorBarText]}>Color Bar</Text>
      </View>
      <Svg height={moderateScale(2)} width={moderateScale(194)} style={styles.lineContainer}>
        <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1="-0.499997"
            y1="0.999675"
            x2={moderateScale(193.5)}
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity="0.5" />
            <Stop offset="1" stopColor="#2A2D34" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Path
          d={`M0 ${moderateScale(1)}L${moderateScale(193.5)} ${moderateScale(1)}`}
          stroke="url(#paint0_linear_237_1125)"
          strokeWidth={moderateScale(0.5)}
        />
      </Svg>
      <View style={styles.buttonContainer}>
        <Spring navigation={navigation} />
        <Summer navigation={navigation} />
        <Autumn navigation={navigation} />
        <Winter navigation={navigation} />
      </View>
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
  arrowButton: {
    position: 'absolute',
    top: moderateScale(60),
    right: moderateScale(40),
  },
  colorBarText: {
    color: '#5A534A',
    fontSize: moderateScale(30),
    fontWeight: '500',
    marginRight: moderateScale(180),
    top: moderateScale(10),
  },
  lineContainer: {
    right: moderateScale(57),
    top: moderateScale(15),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(20),
    top: moderateScale(40),
  },
  button: {
    width: moderateScale(50),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: '#5A534A',
    alignItems: 'center',
    justifyContent: 'center',
    right: moderateScale(30),
    top: moderateScale(75),
    position: 'absolute',
  }
});
