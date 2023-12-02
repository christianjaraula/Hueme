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

  const handleNavigateToSkinColorBar = () => {
    navigation.navigate('SkinColorBar', { cameraVisible: true });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToSkinColorBar} style={styles.arrowButton}>
        <ArrowButtonLeft width={40} height={40} color="#5A534A" />
      </TouchableOpacity>
      <View>
        <Text style={[styles.colorBarText, { fontFamily: 'Familjen Grotesk' }]}>Color Bar</Text>
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
    top: 60,
    right: 40,
  },
  colorBarText: {
    color: '#5A534A',
    fontSize: 36,
    fontWeight: '500',
    marginRight: 200,
    top: -30,
  },
  lineContainer: {
    right: 70,
    top: -25,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 140,
    marginBottom: 20,
    top: 20,
  },
});
