import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const Spring = ({ onPress, navigation }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (navigation) {
      navigation.navigate('Springscheme');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>Spring Scheme</Text>
        <Image source={require('../../TemplatesComponents/Spring/spring.png')} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 384,
    height: 143,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5A534A',
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    color: 'rgba(74, 66, 56, 0.75)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    top: -55,
  },
  image: {
    width: 345,
    height: 100,
    top: 10,
    right: 99,
    flexShrink: 0,
    borderRadius: 20,
  },
});

export default Spring;
