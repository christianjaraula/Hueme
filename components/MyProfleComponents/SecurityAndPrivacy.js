import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { scale, moderateScale, verticalScale } from '../scalingUtils'; // Import scaling functions
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';

export default function SecurityAndPrivacy() {
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
        <Text style={styles.Text}>Security and Privacy</Text>
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
      <Text style={styles.HeaderText}>Privacy Policy</Text>
      <Text style={styles.paragraphText}>
      This Privacy Policy describes Our policies and procedures on the collection, 
      use and disclosure of Your information when You use the Service 
      and tells You about Your privacy rights and how the law protects You.</Text>
      <Text style={styles.paragraphText}>
      We use Your Personal data to provide and improve the Service. 
      By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. 
      </Text>

      <Text style={styles.HeaderText}>Collecting and Using Your Personal Data</Text>
      <Text style={styles.subHeadText}>Types of Data Collected</Text>
      <Text style={styles.subHead2Text}>Personal Data</Text>
      <Text style={styles.paragraphText}>
      While using Our Service, We may ask You to provide Us with certain personally identifiable information that 
      can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
        {'\n\n'}
        <Text style={styles.subHeadText}> • Email Address</Text>
        {'\n'}
        <Text style={styles.subHeadText}> • First name and Last name</Text>
        {'\n'}
        <Text style={styles.subHeadText}> • Usage Data</Text>
      </Text>

      <Text style={styles.HeaderText}>Usage Data</Text>
      <Text style={styles.paragraphText}>
      We automatically collect Usage Data when you use the Service, including your device's IP address, browser details, 
      visited pages, date and time of visit, and device identifiers. If you use a mobile device, we gather information like device type, 
      unique ID, IP address, operating system, and browser type. We also collect data sent by your browser during visits to our Service.
      </Text>

      <Text style={styles.HeaderText}>Information Collected while Using the Application</Text>
      <Text style={styles.paragraphText}>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
      {'\n\n'}
      <Text style={styles.subHeadText}> • Pictures from your Device's camera and photo library</Text>
      {'\n\n'}
      We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers 
      and/or a Service Provider's server or it may be simply stored on Your device. You can enable or disable access to this information at any time, through Your Device settings.
      </Text>
      
      <Text style={styles.HeaderText}>Retention of Your Personal Data</Text>
      <Text style={styles.paragraphText}>
      We'll keep your Personal Data as long as needed for the purposes outlined in this Privacy Policy. 
      This includes meeting legal obligations, resolving disputes, and enforcing agreements. 
      Usage Data is retained briefly, unless required for security, improving service functionality, or by legal obligation.
      </Text>

      <Text style={styles.HeaderText}>Delete Your Personal Data</Text>
      <Text style={styles.paragraphText}>
      You can delete or request assistance in deleting your collected Personal Data. The Service provides options to manage and delete your information within your account settings. 
      Feel free to contact us to access, correct, or delete your personal information. However, certain information may need to be retained due to legal obligations or lawful bases.
      </Text>

      <Text style={styles.HeaderText}>Changes to this Privacy Policy</Text>
      <Text style={styles.paragraphText}>
      We may periodically update our Privacy Policy. Changes will be communicated through email, a notice on our Service, and by updating the 'Last updated' date at the top of this page. 
      It's recommended to check this Privacy Policy regularly for any updates, as changes become effective upon posting.
      </Text>


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
    marginTop: verticalScale(30),
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
