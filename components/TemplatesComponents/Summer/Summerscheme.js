import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from '../../scalingUtils'; // Import the scaling utilities


export default function Summerscheme() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Summer scheme</Text>
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
          <Path
            d="M0 1L193.5 1"
            stroke="url(#paint0_linear_237_1125)"
            strokeWidth="0.5"
          />
        </Svg>
        {/* First Rectangle Container */}
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('CoolSummer')}
      >
        <Text style={styles.rectangleText}>Cool Summer Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#414141' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#319FC2' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#0C3F83' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#565FA2' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#F9B2D0' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#700C3A' }]} />
        </View>
      </TouchableOpacity>
      {/* Second Rectangle Container */}
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('SoftSummer')}
      >
        <Text style={styles.rectangleText}>Soft Summer Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#8D8076' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#E7D89D' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#5F957D' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#FF9DBA' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#F77C85' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#5D5E7B' }]} />
        </View>
      </TouchableOpacity>
      {/* Third Rectangle Container */}
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('LightSummer')}
      >
        <Text style={styles.rectangleText}>Light Summer Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#545C6B' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#CDD0D7' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#79DDB7' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#268194' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#92A9E4' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#AD496F' }]} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.goBack()}
      >
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
    right: moderateScale(145),
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