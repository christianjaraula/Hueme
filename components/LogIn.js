import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LogIn() {
  return (
    <View style={styles.signupGroup}>
    <TouchableOpacity style={styles.container}>
      <Text style={styles.signUp}>Sign Up</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  signupGroup:{ // Add spacing between input and Sign Up
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    width: 312,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#5A534A',
    alignItems: "center",
    justifyContent: "center",
  },
  signUp: {
    fontSize: 10,
    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    color: '#EEE7DA',
  }
})