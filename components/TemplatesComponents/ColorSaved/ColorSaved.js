import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ColorSaved({ navigation }) {
  const handleGoToProfilePress = () => {
    // Navigate to the user profile screen
    // You need to define the 'MyProfile' screen in your navigation stack
    navigation.navigate('MyProfile');
  };

  const handleAddColorPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/colorsaved.png')} style={styles.logoImage} />
      </View>

      <Text>Color Saved!</Text>

      {/* TouchableOpacity Button to go to User Profile */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleGoToProfilePress}
      >
        <Text style={styles.buttonText}>Go to User Profile</Text>
      </TouchableOpacity>

      {/* TouchableOpacity Button to Add Another Color */}
      <TouchableOpacity
        style={styles.addColorContainer}
        onPress={handleAddColorPress}
      >
        <Text style={styles.addColorText}>Add another color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: -70,
  },
  logoImage: {
    width: 200, // Set the width of your logo
    height: 200, // Set the height of your logo
  },
  buttonContainer: {
    width: 325,
    height: 40,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#5A534A',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  addColorContainer: {
    marginTop: 20,
  },
  addColorText: {
    color: '#5A534A',
    fontSize: 12,
  },
});
