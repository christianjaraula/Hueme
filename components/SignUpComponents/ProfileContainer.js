import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileContainer = ({ profileImage, handleProfileImageSelect }) => {
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={handleProfileImageSelect}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../../assets/default_profile.png')} style={styles.profileImage} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileContainer;
