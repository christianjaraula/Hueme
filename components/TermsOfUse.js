import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from './scalingUtils'; // Adjust the import path based on your project structure

const TermsOfUse = ({ handleTermsOfUseClick }) => {
  return (
    <View style={styles.terms}>
      <Text style={styles.termsText}>By continuing, you agree to our</Text>
      <TouchableOpacity onPress={handleTermsOfUseClick}>
        <Text style={styles.termsLink}>Terms of Use</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  terms: {
    marginTop: verticalScale(10),
  },
  termsText: {
    fontSize: moderateScale(8),
    left: moderateScale(120),
  },
  termsLink: {
    fontSize: moderateScale(8),
    left: moderateScale(235),
    top: moderateScale(-11),
    color: '#7DA6A1',
  },
});

export default TermsOfUse;
