import React from 'react';
import { StyleSheet, View} from 'react-native';
import Logo from './components/Logo';
import Input from './components/Input';
import Account from './components/Account';
import LogIn from './components/LogIn'; // Uncomment the import
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FrontDisplay} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const FrontDisplay = () => {
  const navigation = useNavigation();
  const handleLogInPress = () => {
    // Implement any Log In logic here if needed

    // Navigate to the MyProfile screen
    navigation.navigate('MyProfile');
  };
  return (
  <View style={styles.container}>
    <Logo />
    <Input />
    <LogIn onPress={handleLogInPress} />
    <Account />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
