import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import UserDetails from './components/MyProfleComponents/UserDetails';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkinColorBar from './components/SkinColorBar';
import Display from './components/Display';
import Templates from './components/Templates';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FrontDisplay} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetails" component={UserDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SkinColorBar" component={SkinColorBar} options={{ headerShown: false }} />
        <Stack.Screen name="Templates" component={Templates} options={{ headerShown: false }} />
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Display onPress={handleLogInPress} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;