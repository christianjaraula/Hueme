import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from './scalingUtils'; // Import scaling functions

import ArrowButtonLeft from './SVG/NavigationIcon/ArrowButtonLeft'; // Import your icon component
import ArrowButtonRight from './SVG/NavigationIcon/ArrowButtonRight'; // Import your icon component
import TermsOfUse from './TermsOfUse'; // Import the TermsOfUse component
import LineSVG from './SVG/LineSVG';
import ProfileContainer from './SignUpComponents/ProfileContainer';


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [isMonthPickerVisible, setMonthPickerVisible] = useState(false);
  const [isYearPickerVisible, setYearPickerVisible] = useState(false);
  const [day, setDay] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('');
  const monthPickerRef = useRef(null);
  const navigation = useNavigation();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const toggleMonthPicker = () => {
    if (monthPickerRef.current) {
      monthPickerRef.current.scrollTo({ y: 100, animated: true });
    }
    setMonthPickerVisible(!isMonthPickerVisible);
  };

  const selectMonth = (month) => {
    setSelectedMonth(month);
    toggleMonthPicker();
  };

  const showYearPicker = () => {
    setYearPickerVisible(true);
  };

  const hideYearPicker = () => {
    setYearPickerVisible(false);
  };

  const handleYearConfirm = (date) => {
    setSelectedYear(date.getFullYear());
    hideYearPicker();
  };

  const handleTermsOfUseClick = () => {};

  const handleProfileImageSelect = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (pickerResult.canceled === false) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  const handleNavigateToSkinColorBar = () => {
    navigation.navigate('SkinColorBar');
  };

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <View style={styles.iconContainer}>
        <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
      </View>

      <Text style={styles.createAccountText}>Create an Account</Text>

      <LineSVG />

      <ProfileContainer
        profileImage={profileImage}
        handleProfileImageSelect={handleProfileImageSelect}
      />

      <View style={styles.usernameBox}>
        <TextInput
          textAlign="center"
          placeholder="Enter Username"
          value={username}
          onChangeText={(text) => {
            if (text.length <= 13) {
              setUsername(text);
            }
          }}
          maxLength={13}
        />
        <View style={styles.inputLine}></View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.nameBox}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              textAlign="center"
              style={styles.inputBox}
              placeholder=""
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={styles.nameBox}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              textAlign="center"
              style={styles.inputBox}
              placeholder=""
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
        </View>

        <View style={styles.genderBox}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateBox}>
            <Text style={styles.label}>Month</Text>
            <TouchableOpacity onPress={toggleMonthPicker}>
              <Text style={{ ...styles.inputBox, textAlign: 'center', paddingTop: 7 }}>{selectedMonth}</Text>
            </TouchableOpacity>
            {isMonthPickerVisible && (
              <View style={{ ...styles.monthPicker, position: 'absolute', backgroundColor: '#F0EDE7', zIndex: 1 }}>
                <ScrollView
                  ref={monthPickerRef}
                  contentContainerStyle={styles.monthPickerContent}
                >
                  {months.map((month, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => selectMonth(month)}
                      style={styles.monthItem}
                    >
                      <Text>{month}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.label}>Day</Text>
            <TextInput
              textAlign="center"
              style={styles.inputBox}
              placeholder=""
              value={day}
              onChangeText={(text) => setDay(text)}
            />
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.label}>Year</Text>
            <TouchableOpacity onPress={showYearPicker}>
              <Text style={{ ...styles.inputBox, textAlign: 'center', paddingTop: 7 }}>{selectedYear}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isYearPickerVisible}
              mode="date"
              onConfirm={handleYearConfirm}
              onCancel={hideYearPicker}
            />
          </View>
        </View>

        <View style={styles.emailBox}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            textAlign="center"
            style={styles.inputBox}
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.passwordBox}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            textAlign="center"
            style={styles.inputBox}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.confirmPasswordBox}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            textAlign="center"
            style={styles.inputBox}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        {/* <TermsOfUse handleTermsOfUseClick={handleTermsOfUseClick} /> */}

        <View style={styles.arrowButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowButtonLeft width={40} height={40} color="#5A534A" />
          </TouchableOpacity>
        </View>

        <View style={styles.arrowButton2}>
          <TouchableOpacity onPress={handleNavigateToSkinColorBar}>
            <ArrowButtonRight width={40} height={40} color="#5A534A" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
    padding: 20,
  },
  inputBox: {
    width: '99%',
    height: verticalScale(30), // Using verticalScale for height
    borderRadius: moderateScale(6), // Using moderateScale for border radius
    borderWidth: 1,
    borderColor: '#5A534ABF',
  },
  label: {
    marginBottom: verticalScale(1), // Using verticalScale for margin
    fontWeight: 'bold',
    fontSize: moderateScale(10), // Using moderateScale for font size
  },
  profileImageContainer: {
    width: moderateScale(80), // Using moderateScale for width
    height: moderateScale(80), // Using moderateScale for height
    borderRadius: moderateScale(57), // Using moderateScale for border radius
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(-350), // Using verticalScale for margin
    marginTop: verticalScale(25), // Using verticalScale for margin
  },
  icon: {
    width: moderateScale(121), // Using moderateScale for width
    height: moderateScale(89), // Using moderateScale for height
  },
  createAccountText: {
    color: '#5A534A',
    fontSize: moderateScale(26), // Using moderateScale for font size
    fontWeight: '500',
    width: moderateScale(301), // Using moderateScale for width
    height: verticalScale(35), // Using verticalScale for height
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: moderateScale(10), // Using moderateScale for margin
    marginTop: verticalScale(340), // Using verticalScale for margin
  },
  formContainer: {
    marginTop: verticalScale(20), // Using verticalScale for margin
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(-10), // Using verticalScale for margin
  },
  nameBox: {
    flex: 1,
    paddingRight: moderateScale(1), // Using moderateScale for padding
  },
  genderBox: {
    width: '99%',
    marginTop: verticalScale(10), // Using verticalScale for margin
    marginBottom: verticalScale(10), // Using verticalScale for margin
  },
  pickerContainer: {
    width: '100%',
    borderRadius: moderateScale(6), // Using moderateScale for border radius
    borderWidth: 1,
    borderColor: '#5A534ABF',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    flex: 1,
    paddingRight: moderateScale(1), // Using moderateScale for padding
  },
  emailBox: {
    marginTop: verticalScale(10), // Using verticalScale for margin
  },
  passwordBox: {
    marginTop: verticalScale(10), // Using verticalScale for margin
  },
  confirmPasswordBox: {
    marginTop: verticalScale(10), // Using verticalScale for margin
  },
  usernameBox: {
    marginTop: verticalScale(-15), // Using verticalScale for margin
  },
  inputLine: {
    marginTop: verticalScale(-5), // Using verticalScale for margin
    width: '50%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#5A534ABF',
    marginVertical: verticalScale(5), // Using verticalScale for margin
  },
  monthPicker: {
    width: '100%',
    maxHeight: verticalScale(100), // Using verticalScale for max height
    borderColor: '#5A534ABF',
    borderWidth: 1,
    borderRadius: moderateScale(6), // Using moderateScale for border radius
  },
  monthPickerContent: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  monthItem: {
    paddingVertical: verticalScale(8), // Using verticalScale for padding
    paddingHorizontal: moderateScale(16), // Using moderateScale for padding
    borderBottomWidth: 1,
    borderBottomColor: '#5A534ABF',
  },
  arrowButton: {
    marginTop: verticalScale(10), // Using verticalScale for margin
    padding: moderateScale(10), // Using moderateScale for padding
    margin: moderateScale(10), // Using moderateScale for margin
    width: moderateScale(40), // Using moderateScale for width
    height: moderateScale(40),
    top: verticalScale(3), // Using moderateScale for height
  },
  arrowButton2: {
    width: moderateScale(40), // Using moderateScale for width
    height: moderateScale(40), // Using moderateScale for height
    padding: moderateScale(10), // Using moderateScale for padding
    marginLeft: moderateScale(270), // Using moderateScale for margin
    top: verticalScale(-40), // Using verticalScale for margin
  },
});

export default SignUp;
