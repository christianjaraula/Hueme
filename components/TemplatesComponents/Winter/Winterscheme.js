import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from '../../scalingUtils'; // Import the scaling utilities

export default function Autumnscheme() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Winter scheme</Text>
      <Text style={styles.colorBarText}>Color bar</Text>
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
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('DarkWinter')}
      >
        <Text style={styles.rectangleText}>Dark Winter Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#3C2A26' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#193023' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#33321F' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#121D2E' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#231829' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#441321' }]} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('DeepWinter')}
      >
        <Text style={styles.rectangleText}>Deep Winter Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#49312A' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#313524' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#1F3343' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#142153' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#2C1D4E' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#5A091E' }]} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('VividWinter')}
      >
        <Text style={styles.rectangleText}>Vivid Winter Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#ACA041' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#2A6A2A' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#07577D' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#3A265F' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#8B1245' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#8F001F' }]} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowButtonLeft width={scale(40)} height={scale(40)} color="#5A534A" />
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
    width: moderateScale(300),
    height: verticalScale(150),
    flexShrink: 0,
    borderRadius: moderateScale(20),
    borderColor: '#5A534A',
    borderWidth: 1,
    backgroundColor: '#EBEBEB',
    marginBottom: verticalScale(15),
    top: verticalScale(50),
    position: 'relative',
  },
  rectangleText: {
    color: '#5A534A',
    fontSize: moderateScale(13),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(10),
    right: moderateScale(155),
    position: 'absolute',
  },
  verticalRectangle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalVerticalRectangle: {
    width: moderateScale(40),
    height: verticalScale(100),
    flexShrink: 0,
    borderRadius: moderateScale(20),
    marginRight: moderateScale(5),
    top: verticalScale(40),
    left: moderateScale(2),
  },
  arrowButton: {
    position: 'absolute',
    top: verticalScale(60),
    right: moderateScale(40),
  },
});
