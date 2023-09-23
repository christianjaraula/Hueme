import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo';
// import Welcome from './components/Welcome';
import Input from './components/Input';
import SignUp from "./components/SignUp";
import Account from './components/Account';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      {/* <Welcome /> */}
      <Input />
      <SignUp/>
      <Account/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
