import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'; // Import TouchableOpacity
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg'; // Use LinearGradient instead of RadialGradient

import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';

export default function UserDetails() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/HueIcon.png')} style={styles.hueIcon} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowButtonLeft width={40} height={40} color='#5A534A' />
        </TouchableOpacity>
        <Text style={styles.userDetailsText}>User Details</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DA',
  },
  userDetailsText: {
    width: 301,
    height: 40,
    flexShrink: 0,
    color: '#5A534A',
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 40,
    marginTop: 150,
  },
  hueIcon: {
    width: 45,
    height: 40,
    flexShrink: 0,
    position: 'absolute',
    top: 60,
    left: 340,
  },
  arrowButton: {
    position: 'absolute',
    top: 60,
    left: 40,
  },

  lineContainer: {
    marginTop: 10,
    marginLeft: 40,
  },
});
