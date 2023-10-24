import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [day, setDay] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/default_profile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.nameBox}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder=""
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={styles.nameBox}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder=""
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
        </View>

        <View style={styles.genderBox}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Select Gender"
            value={selectedGender}
            onChangeText={(text) => setSelectedGender(text)}
          />
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateBox}>
            <Text style={styles.label}>Month</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Select Month"
              value={selectedMonth}
              onChangeText={(text) => setSelectedMonth(text)}
            />
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.label}>Day</Text>
            <TextInput
              style={styles.inputBox}
              placeholder=""
              value={day}
              onChangeText={(text) => setDay(text)}
            />
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.label}>Year</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Select Year"
              value={selectedYear}
              onChangeText={(text) => setSelectedYear(text)}
            />
          </View>
        </View>

        <View style={styles.emailBox}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.passwordBox}>
          <Text style={styles.label}>Password</Text>
          <TextInput
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
    width: '100%',
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
    marginRight: 10,
  },
  genderBox: {
    marginTop: 10,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    flex: 1,
    marginRight: 10,
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
});

export default SignUp;
