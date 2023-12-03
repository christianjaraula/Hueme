import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { scale, moderateScale, verticalScale } from '../scalingUtils'; // Import scaling functions
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';

export default function SavedPalette() {
  const navigation = useNavigation(); // Get the navigation object
  const [paletteTemplates, setPaletteTemplates] = useState(['Template 1']);

  const handleAddTemplate = () => {
    const newTemplate = `Template ${paletteTemplates.length + 1}`;
    setPaletteTemplates([...paletteTemplates, newTemplate]);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/HueIcon.png')} style={styles.hueIcon} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowButtonLeft width={scale(40)} height={scale(40)} color='#5A534A' />
        </TouchableOpacity>
        <Text style={styles.Text}>Saved Palettes</Text>
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

      {/* Container for saving colors */}
      <ScrollView style={styles.saveColorsColumn} contentContainerStyle={styles.scrollContainer}>
        {paletteTemplates.map((template, index) => (
          <TouchableOpacity key={index} style={styles.saveColorContainer}>
            <View style={styles.smallRectangle}></View>
            <Text style={styles.saveColorText}>{template}</Text>
          </TouchableOpacity>
        ))}
        {/* Add new Palette Template button */}
        <TouchableOpacity onPress={handleAddTemplate} style={styles.addTemplateButton}>
          <Text style={styles.addTemplateText}>Add new</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
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
  saveColorsColumn: {
    flex: 1,
    marginTop: verticalScale(20),
    marginLeft: scale(40),
  },
  scrollContainer: {
    alignItems: 'center',
  },
  saveColorContainer: {
    width: scale(270),
    height: verticalScale(100),
    flexShrink: 0,
    borderRadius: scale(20),
    borderWidth: scale(1),
    borderColor: '#5A534A',
    backgroundColor: '#FFF',
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginRight: scale(40)
  },
  smallRectangle: {
    width: scale(247),
    height: verticalScale(78),
    borderRadius: scale(18),
    borderWidth: scale(0.5),
    borderColor: '#5A534A',
    backgroundColor: '#EECEA8',
    position: 'absolute',
    top: verticalScale(10),
    left: scale(10),
  },
  saveColorText: {
    fontSize: scale(8),
    color: '#5A534A',
    fontWeight: 'bold',
  },
  addTemplateButton: {
    width: scale(100),
    height: verticalScale(40),
    flexShrink: 0,
    borderRadius: scale(100),
    borderWidth: scale(1),
    borderColor: '#5A534A',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(40)
  },
  addTemplateText: {
    fontSize: scale(10),
    color: '#5A534A',
    fontWeight: 'bold',
  },
});
