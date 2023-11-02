import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import Logo from './components/Logo';
import Input from './components/Input';
import LogIn from "./components/LogIn";
import Account from './components/Account';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AppContainer /> */}
      {/* <Logo /> */}
      {/* <Welcome /> */}
      {/* <Input /> */}
      {/* <LogIn /> */}
      {/* <Account /> */}
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DA',
  },
});




export default App;
