import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const Summer = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Summer Scheme</Text>
        <Image source={require('../../components/TemplatesComponents/summer.png')} style={styles.image} />
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
    width: 345, // Set the width of the image as needed
    height: 100, // Set the height of the image as needed 
    top: 10,
    right: 112,
    flexShrink: 0,
    borderRadius: 20,
  },
});

export default Summer;
