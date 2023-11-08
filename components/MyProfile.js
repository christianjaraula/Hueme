import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Svg, { Path, Defs, Stop, RadialGradient } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

// Import your custom icon components
import UserIcon from './SVG/MyProfileIcons/UserIcon';
import SecurityIcon from './SVG/MyProfileIcons/SecurityIcon';
import SavedPalettesIcon from './SVG/MyProfileIcons/SavedPalettesIcon';
import TermsOfUseIcon from './SVG/MyProfileIcons/TermsOfUseIcon';
import AboutUsIcon from './SVG/MyProfileIcons/AboutUsIcon';
import FeedbackIcon from './SVG/MyProfileIcons/FeedbackIcon';

export default function MyProfile() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation(); // Get the navigation object
  
  

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Familjen Grotesk': require('../assets/fonts/FamiljenGrotesk-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  const handleProfileImageSelect = () => {
    // Implement your image selection logic here
    // Make sure to call setProfileImage with the selected image
  };

  const handleUserDetailsPress = () => {
    navigation.navigate('UserDetails');
    // Implement the action when the "User Details" button is pressed
  };

  const handleSecurityAndPrivacyPress = () => {
    // Implement the action when the "Security and Privacy" button is pressed
  };

  const handleSavedPalettesPress = () => {
    // Implement the action when the "Saved Palettes" button is pressed
  };

  const handleTermsOfUsePress = () => {
    
  };

  const handleAboutUSPress = () => {
    
  };

  const handleFeedbackPress = () => {
    
  };

  const handleLogoutPress = () => {
    // Implement your logout logic here

    // Navigate back to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {fontLoaded && (
        <View>
          <Image
            source={require('../assets/HueIcon.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.profileText}>My Profile</Text>
            <Svg height="2" width="194" style={styles.lineContainer}>
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
              <Text style={styles.nicknameText}>Nickname</Text>
              <Text style={styles.emailText}>example@gmail.com</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleUserDetailsPress}>
                <View  style={styles.buttonIcon}></View>
                  <UserIcon width={23} height={26} color="#F0EDE7"  />
                  <Text style={styles.iconText}>User Details</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSecurityAndPrivacyPress}>
                <View  style={styles.buttonIcon}></View>
                  <SecurityIcon width={23} height={26} color="#F0EDE7" />
                  <Text style={styles.iconText}>Security and Privacy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSavedPalettesPress}>
                <View  style={styles.buttonIcon}></View>
                  <SavedPalettesIcon width={23} height={26} color="#F0EDE7" />
                  <Text style={styles.iconText}>Saved Palettes</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleTermsOfUsePress}>
                <View  style={styles.buttonIcon}></View>
                  <TermsOfUseIcon width={23} height={26} color="#F0EDE7" />
                  <Text style={styles.iconText}>Terms of Use</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAboutUSPress}>
                <View  style={styles.buttonIcon}></View>
                  <AboutUsIcon width={23} height={26} color="#F0EDE7" />
                  <Text style={styles.iconText}>About Us</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
                <View  style={styles.buttonIcon}></View>
                  <FeedbackIcon width={23} height={26} color="#F0EDE7" />
                  <Text style={styles.iconText}>Help and Feedback</Text>
                </TouchableOpacity>
              </View>

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
    backgroundColor: '#EEE7DA',
  },
  profileText: {
    width: 301,
    height: 50,
    color: '#5A534A',
    textAlign: 'center',
    fontFamily: 'Familjen Grotesk',
    fontSize: 36,
    fontWeight: '500',
    marginTop: 150,
    alignSelf: 'center',
  },
  icon: {
    width: 45,
    height: 40,
    flexShrink: 0,
    position: 'absolute',
    top: 60,
    left: 340,
  },
  lineContainer: {
    alignSelf: 'center',
    marginTop: -5,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 57,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  nicknameText: {
    width: 301,
    height: 40,
    color: '#5A534A',
    textAlign: 'center',
    fontFamily: 'Familjen Grotesk',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 10,
  },
  emailText: {
    color: 'rgba(74, 66, 56, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 325,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5A534A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5
  },
  iconText: {
    color: '#F0EDE7',
    fontFamily: 'Familjen Grotesk',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 21,
    position: 'absolute',
  },
  buttonIcon: {
    width: 23,
    height: 26,
    color: '#F0EDE7',
    marginRight: -250, // Adjust this value to move the icon to the right
  },
  logoutButton: {
    width: 325,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#5A534A',
    fontFamily: 'Familjen Grotesk',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    marginTop: 10,
  },
});

