import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';

export default function Autumnscheme() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Winter scheme</Text>
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
      {/* Second Rectangle Container */}
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
      {/* Third Rectangle Container */}
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
