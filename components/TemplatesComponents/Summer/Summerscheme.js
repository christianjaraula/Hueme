import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import ArrowButtonLeft from '../../SVG/NavigationIcon/ArrowButtonLeft';
import { useNavigation } from '@react-navigation/native';


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
