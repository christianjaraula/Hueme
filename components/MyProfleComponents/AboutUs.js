import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
/* import Airo from '../SVG/Profile/Airo.png';
import Jaraula from '../SVG/Profile/Jaraula.png';
import Nanquil from '../SVG/Profile/Nanquil.png';
import Penas from '../SVG/Profile/Penas.png';
import Valerio from '../SVG/Profile/Valerio.png'; */
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { scale, moderateScale, verticalScale } from '../scalingUtils'; // Import scaling functions
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';

export default function AboutUs() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/HueIcon.png')} style={styles.hueIcon} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowButtonLeft width={scale(40)} height={scale(40)} color='#5A534A' />
        </TouchableOpacity>
        <Text style={styles.Text}>About Us</Text>
      </View>
      <Svg height={verticalScale(2)} width={scale(194)} style={styles.lineContainer}>
        <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(-0.5)}
            y1={verticalScale(0.999675)}
            x2={scale(193.5)}
            y2={verticalScale(1)}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity={0.5} />
            <Stop offset="1" stopColor="#2A2D34" stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Path
          d={`M0 ${verticalScale(1)}L${scale(193.5)} ${verticalScale(1)}`}
          stroke="url(#paint0_linear_237_1125)"
          strokeWidth={scale(0.5)}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
  },
  Text: {
    flexShrink: 0,
    color: '#5A534A',
    fontSize: scale(30),
    marginLeft: scale(40),
    marginTop: verticalScale(150),
  },
  hueIcon: {
    width: scale(45),
    height: verticalScale(40),
    flexShrink: 0,
    position: 'absolute',
    top: verticalScale(60),
    left: scale(280),
  },
  arrowButton: {
    position: 'absolute',
    top: verticalScale(60),
    left: scale(40),
  },
  lineContainer: {
    marginTop: verticalScale(1),
    marginLeft: scale(40),
  },
});
