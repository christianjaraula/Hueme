import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Account({ navigation }) {
  return (
    <View>
      <Text style={styles.newUserText}>New user?</Text>
      <Text style={styles.space}>&nbsp;</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  newUserText: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },
  space: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },
  createAccountText: {
    color: '#4A4238',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },
};
