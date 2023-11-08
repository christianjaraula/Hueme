import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    marginTop: 10,
  },
  termsText: {
    fontSize: 8,
    left: 187,
  },
  termsLink: {
    fontSize: 8,
    left: 314,
    top: -11,
    color: '#7DA6A1',
  },
});

export default TermsOfUse;

