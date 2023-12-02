import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../scalingUtils'

const Summer = ({ onPress, navigation }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (navigation) {
      navigation.navigate('Summerscheme'); 
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>Summer Scheme</Text>
        <Image source={require('../../TemplatesComponents/Summer/summer.png')} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(320),
    height: verticalScale(110),
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: '#5A534A',
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: verticalScale(20),
  },
  text: {
    color: 'rgba(74, 66, 56, 0.75)',
    fontFamily: 'Familjen Grotesk',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    top: verticalScale(-40),
  },
  image: {
    width: moderateScale(300),
    height: verticalScale(70),
    top: verticalScale(10),
    right: moderateScale(120),
    flexShrink: 0,
    borderRadius: moderateScale(20),
  },
});

export default Summer;
