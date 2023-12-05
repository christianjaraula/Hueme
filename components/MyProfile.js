import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Split } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Svg, { Path, Defs, Stop, RadialGradient } from 'react-native-svg';
import { useNavigation, useRoute} from '@react-navigation/native';
import { moderateScale, verticalScale } from './scalingUtils';

// Import your custom icon components
import UserIcon from './SVG/MyProfileIcons/UserIcon';
import SecurityIcon from './SVG/MyProfileIcons/SecurityIcon';
import SavedPalettesIcon from './SVG/MyProfileIcons/SavedPalettesIcon';
import TermsOfUseIcon from './SVG/MyProfileIcons/TermsOfUseIcon';
import AboutUsIcon from './SVG/MyProfileIcons/AboutUsIcon';
import FeedbackIcon from './SVG/MyProfileIcons/FeedbackIcon';
import TemplateIcon from './SVG/MyProfileIcons/TemplateIcon';

import { db } from "../services/firebase";
import { getDocs, query, collection, where, doc } from 'firebase/firestore';

export default function MyProfile({route}) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [day, setDay] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();

    if (route.params && route.params.userData) {
      setUserData(route.params.userData);
      setProfileImage(route.params.userData.profileImage || '');
      setSelectedMonth(route.params.userData.month || '');
      setDay(route.params.userData.day || '');
      setSelectedYear(route.params.userData.year || '');
      setEmail(route.params.userData.email || '');
      setUsername(route.params.userData.username || '');
      
    }
  }, [route.params]);



  const handleProfileImageSelect = () => {
    // Implement your image selection logic here
    // Make sure to call setProfileImage with the selected image
  };

  const handleUserDetailsPress = () => {
    navigation.navigate('UserDetails', { userData});
    // Implement the action when the "User Details" button is pressed
  };

  const handleSecurityAndPrivacyPress = () => {
    navigation.navigate('SecurityAndPrivacy');
    // Implement the action when the "Security and Privacy" button is pressed
  };

  // const handleSavedPalettesPress = () => {
  //   navigation.navigate('SavedPalette');
  //   // Implement the action when the "Saved Palettes" button is pressed
  // };

   const handleTermsOfUsePress = () => {
     navigation.navigate('TermsOfUse');
     // Implement the action when the "Terms of Use" button is pressed
   };

  const handleTemplates = () => {
    navigation.navigate('Templates');
    // Implement the action when the "About Us" button is pressed
  };

  const handleAboutUSPress = () => {
    navigation.navigate('AboutUs');
    // Implement the action when the "About Us" button is pressed
  };

 // const handleFeedbackPress = () => {
 //   navigation.navigate('HelpAndFeedback');
    // Implement the action when the "Help and Feedback" button is pressed
 // };

  const handleLogoutPress = () => {
    // Implement your logout logic here
    // Navigate back to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {fontLoaded && (
        <View>
          <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
          <View>
            <Text style={styles.profileText}>My Profile</Text>
            <Svg height={verticalScale(2)} width={moderateScale(194)} style={styles.lineContainer}>
              <Defs>
                <RadialGradient
                  id="paint0_radial_222_17"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(96.5 0.999837) scale(97 18769.5)"
                >
                  <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity="0.5" />
                  <Stop offset="1" stopColor="#2A2D34" stopOpacity="0" />
                </RadialGradient>
              </Defs>
              <Path
                d="M0 1L193.5 1"
                stroke="url(#paint0_radial_222_17)"
                strokeWidth="0.5"
              />
            </Svg>


            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfileImageSelect}>
                <View style={styles.profileImageContainer}>
                  {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                  ) : (
                    <Image source={require('../assets/default_profile.png')} style={styles.profileImage} />
                  )}
                  </View>
                </TouchableOpacity>
                <Text style={styles.nicknameText}>{userData?.username}</Text>
                <Text style={styles.emailText}>{userData?.email}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#DB4E69' }]} onPress={handleTemplates}>
                  <View style={styles.buttonIcon}></View>
                  <TemplateIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={[styles.iconText, { color: '#F0EDE7' }]}>Templates</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleUserDetailsPress}>
                  <View style={styles.buttonIcon}></View>
                  <UserIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>User Details</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSecurityAndPrivacyPress}>
                  <View style={styles.buttonIcon}></View>
                  <SecurityIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>Security and Privacy</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSavedPalettesPress}>
                  <View style={styles.buttonIcon}></View>
                  <SavedPalettesIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>Saved Palettes</Text>
                </TouchableOpacity>
              </View> */}

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleTermsOfUsePress}>
                  <View style={styles.buttonIcon}></View>
                  <TermsOfUseIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>Terms of Use</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAboutUSPress}>
                  <View style={styles.buttonIcon}></View>
                  <AboutUsIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>About Us</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
                  <View style={styles.buttonIcon}></View>
                  <FeedbackIcon width={moderateScale(23)} height={moderateScale(26)} color="#F0EDE7" />
                  <Text style={styles.iconText}>Help and Feedback</Text>
                </TouchableOpacity>
              </View> */}

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
  },
  profileText: {
    width: moderateScale(301),
    height: verticalScale(50),
    color: '#5A534A',
    textAlign: 'center',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(36),
    fontWeight: '500',
    marginTop: verticalScale(100),
    alignSelf: 'center',
  },
  icon: {
    width: moderateScale(45),
    height: moderateScale(40),
    flexShrink: 0,
    position: 'absolute',
    top: verticalScale(60),
    left: moderateScale(300),
  },
  lineContainer: {
    alignSelf: 'center',
    marginTop: -verticalScale(5),
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileImageContainer: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(57),
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  nicknameText: {
    width: moderateScale(301),
    height: verticalScale(40),
    color: '#5A534A',
    textAlign: 'center',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(25),
    fontWeight: '600',
    marginTop: verticalScale(10),
  },
  emailText: {
    color: 'rgba(74, 66, 56, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(13),
    fontStyle: 'normal',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: moderateScale(325),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: '#5A534A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -verticalScale(10),
  },
  iconText: {
    color: '#F0EDE7',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(20),
    fontWeight: '500',
    lineHeight: moderateScale(21),
    position: 'absolute',
  },
  buttonIcon: {
    color: '#F0EDE7',
    marginRight: -moderateScale(250),
  },
  logoutButton: {
    width: moderateScale(100),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(1),
  },
  logoutText: {
    color: '#5A534A',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(20),
    fontStyle: 'normal',
    fontWeight: '500',
    bottom: verticalScale(10), // Adjusted this value
  },
});
