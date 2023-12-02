import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';


export default function Springscheme() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Spring scheme</Text>
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
        onPress={() => navigation.navigate('WarmSpring')}
      >
        <Text style={styles.rectangleText}>Warm Spring Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#675E57' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#326F32' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#1170BA' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#EBA94B' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#FA7D61' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#B63C37' }]} />
        </View>
      </TouchableOpacity>
      {/* Second Rectangle Container */}
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('LightSpring')}
      >
        <Text style={styles.rectangleText}>Light Spring Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#7C7AB9' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#1BAC79' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#CCE182' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#F6EF69' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#D6BB95' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#F79E8C' }]} />
        </View>
      </TouchableOpacity>
      {/* Third Rectangle Container */}
      <TouchableOpacity
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate('ClearSpring')}
      >
        <Text style={styles.rectangleText}>Clear Spring Colors</Text>
        <View style={styles.verticalRectangle}>
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#745539' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#134172' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#097C5D' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#8B9B37' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#FB7353' }]} />
          <View style={[styles.additionalVerticalRectangle, { backgroundColor: '#D8364D' }]} />
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
    height: 200,
    flexShrink: 0,
    borderRadius: 20,
    borderColor: '#5A534A',
    borderWidth: 1,
    backgroundColor: '#EBEBEB',
    marginBottom: 15,
    top: 50,
    position: 'relative',
  },
  rectangleText: {
    color: '#5A534A',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    right: 220,
    position: 'absolute',
  },
  verticalRectangle: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center', // Center the items vertically
  },
  additionalVerticalRectangle: {
    width: 54,
    height: 120,
    flexShrink: 0,
    borderRadius: 20,
    marginRight: 5,
    top: 60, // Adjust the margin between additional vertical rectangles
    left: 2,
  },
  arrowButton: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
});
