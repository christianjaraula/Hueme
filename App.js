import React from 'react';
import { StyleSheet, View} from 'react-native';
import Logo from './components/Logo';
import Input from './components/Input';
import Account from './components/Account';
import LogIn from './components/LogIn'; // Uncomment the import
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FrontDisplay} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const FrontDisplay = () => (
  <View style={styles.container}>
    <Logo />
    <Input />
    <LogIn /> 
    <Account />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
