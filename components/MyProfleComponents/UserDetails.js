import React, { useState, useRef } from 'react';
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
import { scale, verticalScale } from '../scalingUtils'; // Import scaling functions
import ArrowButtonLeft from '../SVG/NavigationIcon/ArrowButtonLeft';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


export default function UserDetails() {
  const navigation = useNavigation(); // Get the navigation object
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('John'); // Initial value for demo
  const [editedLastName, setEditedLastName] = useState('Doe'); // Initial value for demo
  const [editedGender, setEditedGender] = useState('Male'); // Initial value for demo
  const [editedBirthday, setEditedBirthday] = useState({
    month: 'January',
    day: '1',
    year: '1990',
  }); // Initial value for demo
  const [editedEmail, setEditedEmail] = useState('john.doe@example.com'); // Initial value for demo
  const [editedPassword, setEditedPassword] = useState(''); // Initial value for demo
  const [editedConfirmPassword, setEditedConfirmPassword] = useState(''); // Initial value for demo

  const [isMonthPickerVisible, setMonthPickerVisible] = useState(false);
  const [isYearPickerVisible, setYearPickerVisible] = useState(false);
  const monthPickerRef = useRef(null);
  const yearPickerRef = useRef(null);

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
    if (monthPickerRef.current) {
      monthPickerRef.current.scrollTo({ y: 100, animated: true });
    }
    setMonthPickerVisible(!isMonthPickerVisible);
  };

  const selectMonth = (month) => {
    setEditedBirthday({ ...editedBirthday, month });
    toggleMonthPicker();
  };

  const showYearPicker = () => {
    setYearPickerVisible(true);
  };

  const hideYearPicker = () => {
    setYearPickerVisible(false);
  };

  const handleYearConfirm = (date) => {
    setEditedBirthday({ ...editedBirthday, year: date.getFullYear().toString() });
    hideYearPicker();
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

      {/* New TouchableOpacity Component */}
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

        {/* Editable User Details */}
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

        <TextInput
          style={styles.inputBox}
          value={editedGender}
          onChangeText={(text) => setEditedGender(text)}
          placeholder="Gender"
          editable={isEditing}
        />
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
            onFocus={showYearPicker}
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
       {/* Month Picker */}
      <DateTimePickerModal
        isVisible={isMonthPickerVisible}
        mode="date"
        onConfirm={(date) => selectMonth(months[date.getMonth()])}
        onCancel={toggleMonthPicker}
        display="spinner"
        ref={monthPickerRef}
      />

      {/* Year Picker */}
      <DateTimePickerModal
        isVisible={isYearPickerVisible}
        mode="date"
        onConfirm={handleYearConfirm}
        onCancel={hideYearPicker}
        display="spinner"
        maximumDate={new Date()}
        ref={yearPickerRef}
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
    width: '80%',
  },
  birthdayInput: {
    flex: 1,
    marginRight: scale(1),
  },
});


