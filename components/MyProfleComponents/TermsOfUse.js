import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { scale, moderateScale, verticalScale } from '../scalingUtils'; // Import scaling functions
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';

export default function TermsOfUse() {
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
        <Text style={styles.Text}>Terms of Use</Text>
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
      <ScrollView>
      <Text style={styles.paragraphText}>{'\n'}Welcome to HueMe, a mobile application provided by AinZ. 
      By using the HueMe mobile application, you agree to comply with and be bound by the following Terms of Use. 
      If you do not agree to these terms, please do not use the App.{'\n\n'}
      By downloading, installing, or using the HueMe Application, you agree to be bound by the terms and conditions outlined in this Agreement.
      </Text>

      <Text style={styles.HeaderText}>License to Use</Text>
      <Text style={styles.paragraphText}>We grant you a limited, non-exclusive, non-transferable, 
      revocable license to use the Application for your personal, non-commercial use. 
      You may not sublicense, assign, or transfer this license.</Text>

      <Text style={styles.HeaderText}>Data Collection</Text>
      <Text style={styles.subHead2Text}>Pesonal Information</Text>  
      <Text style={styles.paragraphText}>In order to enhance your experience with HueMe, we may collect and store personal information, 
      including but not limited to your first name, last name, and email address. We prioritize the security and confidentiality of this information. 
      Please refer to our Privacy Policy for more details on how we handle your personal information.</Text>

      <Text style={styles.subHead2Text}>Camera and Gallery Access</Text>  
      <Text style={styles.paragraphText}>HueMe may request access to your device's camera and gallery features for specific functionalities. 
      This access is used solely for the intended purposes of the App, such as capturing photos or accessing images for customization. 
      We do not use this data for any unauthorized or unrelated activities.</Text>

      <Text style={styles.HeaderText}>User Accounts</Text>
      <Text style={styles.paragraphText}>You may be required to create an account to access certain features of the Application. 
      You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</Text>
      <Text style={styles.subHead2Text}>Accurate Information</Text>  
      <Text style={styles.paragraphText}>You agree to provide accurate and complete information during the registration process and while using the App. 
      Any changes to your information should be promptly updated within the App.</Text>
      <Text style={styles.subHead2Text}>Usage Restrictions</Text>  
      <Text style={styles.paragraphText}>You agree not to misuse the App, including but not limited to engaging in unauthorized access, using the App for illegal purposes, 
      or violating any applicable laws or regulations.{'\n'}</Text>

      <Text style={styles.HeaderText}>Intellectual Property</Text>  
      <Text style={styles.subHead2Text}>Ownership</Text>  
      <Text style={styles.paragraphText}>Ainz retains all rights, title, and interest in and to the App, including all content, graphics, and designs. 
      The Application is protected by copyright, trademark, and other intellectual property laws.</Text>
      <Text style={styles.subHead2Text}>License</Text>  
      <Text style={styles.paragraphText}>Subject to your compliance with these Terms, 
      Ainz grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes.</Text>

      <Text style={styles.HeaderText}>Termination of Accoun</Text>
      <Text style={styles.paragraphText}>Ainz may terminate user accounts that violate these terms or engage in activities that compromise the integrity of the application.</Text>
      </ScrollView>
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
    marginLeft: scale(40),
    marginTop: verticalScale(150),
  },
  HeaderText: {
    flexShrink: 0,
    color: '#5A534A',
    fontSize: scale(18),
    fontWeight: 'bold',
    marginLeft: scale(40),
    marginTop: verticalScale(25),
  },
  paragraphText: {
    flexShrink: 0,
    color: '#5A534A',
    fontSize: scale(13),
    textAlign: "justify",
    marginLeft: scale(40),
    marginRight: scale(40),
    marginTop: verticalScale(5),
  },
  subHeadText: {
    flexShrink: 0,
    color: '#5A534A',
    fontSize: scale(15),
    fontStyle: "italic",
    marginLeft: scale(40),
    marginRight: scale(40),
    marginTop: verticalScale(5),
  },
  subHead2Text: {
    flexShrink: 0,
    color: '#5A534A',
    fontSize: scale(13),
    fontWeight: 'bold',
    marginLeft: scale(40),
    marginRight: scale(40),
    marginTop: verticalScale(10),
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
