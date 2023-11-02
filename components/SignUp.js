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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <View style={styles.iconContainer}>
        <Image source={require('../assets/HueIcon.png')} style={styles.icon} />
      </View>

      <Text style={styles.createAccountText}>Create an Account</Text>

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
      </View>

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
              <View style={{ ...styles.monthPicker, position: 'absolute', backgroundColor: '#EEE7DA', zIndex: 1  }}>
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
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 350,
    flex: 1,
    backgroundColor: '#EEE7DA',
    padding: 20,
  },
  inputBox: {
    width: '99%',
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  iconContainer: {
    alignItems: 'center',
    marginTop: -300,
  },
  icon: {
    width: 121,
    height: 89,
  },
  createAccountText: {
    color: '#5A534A',
    fontSize: 26,
    fontWeight: '500',
    width: 301,
    height: 35,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 35,
  },
  formContainer: {
    marginTop: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameBox: {
    flex: 1,
    paddingRight: 1,
  },
  genderBox: {
    width: '99%',
    marginTop: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    flex: 1,
    paddingRight: 1,
  },
  emailBox: {
    marginTop: 10,
  },
  passwordBox: {
    marginTop: 10,
  },
  confirmPasswordBox: {
    marginTop: 10,
  },
  usernameBox: {
    marginTop: -15,
  },
  inputLine: {
    marginTop: -5,
    width: '50%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: 'rgba(90, 83, 74, 0.75)',
    marginVertical: 5,
  },
  monthPicker: {
    width: '100%',
    maxHeight: 100,
    borderColor: 'rgba(90, 83, 74, 0.75)',
    borderWidth: 1,
    borderRadius: 6,
  },
  monthPickerContent: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  monthItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(90, 83, 74, 0.75)',
  },

});

export default SignUp;
