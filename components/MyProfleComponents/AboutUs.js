import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Airo from '../SVG/Profile/Airo.png';
import Jaraula from '../SVG/Profile/Jaraula.png';
import Nanquil from '../SVG/Profile/Nanquil.png';
import Penas from '../SVG/Profile/Penas.png';
import Valerio from '../SVG/Profile/Valerio.png';
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
      <Svg height={verticalScale(2)} width={scale(100)} style={styles.lineContainer}>
        <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
      
      {/* Airo */}
      <Image source={Airo} style={styles.Airo}/>
      <Text style={styles.CornillezText}>Cornillez,</Text>
      <Svg height={verticalScale(2)} width={scale(160)} style={styles.lineContainer}>
      <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
          strokeWidth={scale(1.5)}
        />
      </Svg>
      <Text style={styles.AiroText}>Airo Craven</Text>
      <Text style={styles.spacing}></Text>

      {/* Jaraula */}
      <Image source={Jaraula} style={styles.Jaraula}/>
      <Text style={styles.JaraulaText}>Jaraula,</Text>
      <Svg height={verticalScale(2)} width={scale(160)} style={styles.lineContainer}>
      <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
          strokeWidth={scale(1.5)}
        />
      </Svg>
      <Text style={styles.ChristianText}>Christian</Text>
      <Text style={styles.spacing}></Text>

      {/* Nanquil */}
      <Image source={Nanquil} style={styles.Nanquil}/>
      <Text style={styles.NanquilText}>Nanquil,</Text>
      <Svg height={verticalScale(2)} width={scale(160)} style={styles.lineContainer}>
      <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
          strokeWidth={scale(1.5)}
        />
      </Svg>
      <Text style={styles.NealianText}>Nealian Beth</Text>
      <Text style={styles.spacing}></Text>

      {/* Penas */}
      <Image source={Penas} style={styles.Penas}/>
      <Text style={styles.PenasText}>Penas,</Text>
      <Svg height={verticalScale(2)} width={scale(160)} style={styles.lineContainer}>
      <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
          strokeWidth={scale(1.5)}
        />
      </Svg>
      <Text style={styles.IssaText}>Issa Victoria</Text>
      <Text style={styles.spacing}></Text>

      {/* Valerio */}
      <Image source={Valerio} style={styles.Valerio}/>
      <Text style={styles.ValerioText}>Valerio,</Text>
      <Svg height={verticalScale(2)} width={scale(160)} style={styles.lineContainer}>
      <Defs>
          <LinearGradient
            id="paint0_linear_237_1125"
            x1={scale(193.5)}
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
          strokeWidth={scale(1.5)}
        />
      </Svg>
      <Text style={styles.NathanielText}>Nathaniel</Text>

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
    fontSize: scale(25),
    textAlign: 'center',
    marginTop: verticalScale(110),
    
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
    marginBottom: scale(5),
    marginLeft: scale(125),
  },  
  lineProfile: {
    marginTop: verticalScale(1),
    marginLeft: scale(80),
  },
  Airo: {
    width: 103, 
    height: 100, 
    marginLeft: scale(40),
    marginTop: verticalScale(20),
  },
  CornillezText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(135),
    marginRight: scale(40),
    marginTop: verticalScale(-60),
  },
  AiroText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(200),
    marginRight: scale(40),
    marginTop: verticalScale(-5),
  },
  Jaraula: {
    width: 101, 
    height: 100, 
    marginLeft: scale(40),
    marginTop: verticalScale(20),
  },
  JaraulaText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(135),
    marginRight: scale(40),
    marginTop: verticalScale(-60),
  },
  ChristianText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(200),
    marginRight: scale(40),
    marginTop: verticalScale(-5),
  },
  Nanquil: {
    width: 101, 
    height: 100, 
    marginLeft: scale(40),
    marginTop: verticalScale(20),
  },
  NanquilText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(135),
    marginRight: scale(40),
    marginTop: verticalScale(-60),
  },
  NealianText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(200),
    marginRight: scale(40),
    marginTop: verticalScale(-5),
  },
  Penas: {
    width: 101, 
    height: 100, 
    marginLeft: scale(40),
    marginTop: verticalScale(20),
  },
  PenasText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(135),
    marginRight: scale(40),
    marginTop: verticalScale(-60),
  },
  IssaText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(200),
    marginRight: scale(40),
    marginTop: verticalScale(-5),
  },
  Valerio: {
    width: 101, 
    height: 100, 
    marginLeft: scale(40),
    marginTop: verticalScale(20),
  },
  ValerioText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(135),
    marginRight: scale(40),
    marginTop: verticalScale(-60),
  },
  NathanielText: {
    flexShrink: 0,
    color: '#D8364D',
    fontSize: scale(13),
    textAlign: "justify",
    fontWeight: 'bold',
    marginLeft: scale(200),
    marginRight: scale(40),
    marginTop: verticalScale(-5),
  },
  spacing:{
    marginBottom: scale(1),
  }
});
