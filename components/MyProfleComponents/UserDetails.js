import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { scale, verticalScale } from '../scalingUtils';
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function UserDetails({route}) {
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedGender, setEditedGender] = useState('');
  const [editedBirthday, setEditedBirthday] = useState({
    month: '',
    day: '',
    year: '',
  });
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  const [editedConfirmPassword, setEditedConfirmPassword] = useState('');

  const [monthPickerVisible, setMonthPickerVisible] = useState(false);
  const [yearPickerVisible, setYearPickerVisible] = useState(false);

  useEffect(() => {
    if (route.params && route.params.userData) {
      const userData = route.params.userData;
      setProfileImage(userData.profileImage);
      setEditedFirstName(userData.firstName);
      setEditedLastName(userData.lastName);
      setEditedEmail(userData.email);
      setEditedPassword(userData.password)
      setEditedConfirmPassword(userData.confirmPassword)
      
      // Set the values for other fields based on the userData object
    }
  }, [route.params]);

  const handleProfileImageSelect = () => {
    // Implement your image selection logic here
    // Make sure to call setProfileImage with the selected image
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Implement your logic to save the edited user details
    setIsEditing(false);
  };

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
    setMonthPickerVisible(!monthPickerVisible);
  };

  const toggleYearPicker = () => {
    setYearPickerVisible(!yearPickerVisible);
  };

  const handleMonthConfirm = (date) => {
    setEditedBirthday({ ...editedBirthday, month: months[date.getMonth()] });
    toggleMonthPicker();
  };

  const handleYearConfirm = (date) => {
    setEditedBirthday({ ...editedBirthday, year: date.getFullYear().toString() });
    toggleYearPicker();
  };

  const handleDateConfirm = (date) => {
    // Process the selected date and update the state
    setEditedBirthday({
      month: date.getMonth() + 1, // Months are 0-based
      day: date.getDate(),
      year: date.getFullYear(),
    });
    toggleMonthPicker();
    toggleYearPicker();
  };


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
        <Text style={styles.Text}>User Details</Text>
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

      <TouchableOpacity onPress={handleProfileImageSelect}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../../assets/default_profile.png')} style={styles.profileImage} />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.nicknameText}>Nickname</Text>
        <Text style={styles.editDetailsText} onPress={handleEditClick}>
          {isEditing ? 'Cancel' : 'Edit User Details'}
        </Text>

        <View style={styles.nameContainer}>
          <TextInput
            style={[styles.inputBox, styles.halfInput]}
            value={editedFirstName}
            onChangeText={(text) => setEditedFirstName(text)}
            placeholder="First Name"
            editable={isEditing}
          />
          <TextInput
            style={[styles.inputBox, styles.halfInput]}
            value={editedLastName}
            onChangeText={(text) => setEditedLastName(text)}
            placeholder="Last Name"
            editable={isEditing}
          />
        </View>


        <View style={styles.birthdayContainer}>
          <TextInput
            style={[styles.inputBox, styles.birthdayInput]}
            value={editedBirthday.month}
            placeholder="Month"
            editable={isEditing}
            onFocus={toggleMonthPicker}
          />
          <TextInput
            style={[styles.inputBox, styles.birthdayInput]}
            value={editedBirthday.day}
            onChangeText={(text) => setEditedBirthday({ ...editedBirthday, day: text })}
            placeholder="Day"
            editable={isEditing}
          />
          <TextInput
            style={[styles.inputBox, styles.birthdayInput]}
            value={editedBirthday.year}
            placeholder="Year"
            editable={isEditing}
            onFocus={toggleYearPicker}
          />
        </View>
        <TextInput
          style={styles.inputBox}
          value={editedEmail}
          onChangeText={(text) => setEditedEmail(text)}
          placeholder="Email Address"
          editable={isEditing}
        />
        <TextInput
          style={styles.inputBox}
          value={editedPassword}
          onChangeText={(text) => setEditedPassword(text)}
          placeholder="Password"
          secureTextEntry
          editable={isEditing}
        />
        <TextInput
          style={styles.inputBox}
          value={editedConfirmPassword}
          onChangeText={(text) => setEditedConfirmPassword(text)}
          placeholder="Confirm Password"
          secureTextEntry
          editable={isEditing}
        />

        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveClick}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>

      <DateTimePickerModal
        isVisible={monthPickerVisible}
        mode="date"
        onConfirm={handleMonthConfirm}
        onCancel={toggleMonthPicker}
        display="spinner"
      />

      <DateTimePickerModal
        isVisible={yearPickerVisible}
        mode="date"
        onConfirm={handleYearConfirm}
        onCancel={toggleYearPicker}
        display="spinner"
        maximumDate={new Date()}
      />
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
    fontSize: scale(30),
    marginLeft: scale(40),
    marginTop: verticalScale(130),
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
  // New styles for profile image
  profileImageContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  profileImage: {
    width: scale(70),
    height: scale(70),
    borderRadius: scale(50),
    marginTop: verticalScale(10),
    right: scale(100),
  },
  textContainer: {
    alignItems: 'center',
  },
  editDetailsText: {
    marginTop: verticalScale(10),
    color: '#5A534A',
    fontSize: scale(10),
    right: scale(98),
  },
  nicknameText: {
    bottom: verticalScale(50),
    color: '#5A534A',
    fontSize: scale(20),
  },
  inputBox: {
    width: '80%',
    height: verticalScale(30),
    borderRadius: scale(6),
    borderWidth: scale(1),
    borderColor: '#5A534ABF',
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  saveButton: {
    backgroundColor: '#5A534A',
    borderRadius: scale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(10),
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: scale(16),
    textAlign: 'center',
  },
  userDetailText: {
    marginTop: verticalScale(10),
    fontSize: scale(16),
    color: '#5A534A',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: verticalScale(10),
  },
  halfInput: {
    width: '48%', // Adjust as needed based on your design
  },
  birthdayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '84%',
  },
  birthdayInput: {
    flex: 1,
    marginRight: scale(5),
    marginLeft: scale(7),
  },
});


