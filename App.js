import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import UserDetails from './components/MyProfleComponents/UserDetails';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkinColorBar from './components/SkinColorBar';
import Display from './components/Display';
import Templates from './components/Templates';
import Springscheme from './components/TemplatesComponents/Spring/Springscheme';
import Summerscheme from './components/TemplatesComponents/Summer/Summerscheme';
import Winterscheme from './components/TemplatesComponents/Winter/Winterscheme';
import Autumnscheme from './components/TemplatesComponents/Autumn/Autumnscheme';
import WarmSpring from './components/TemplatesComponents/Spring/WarmSpring';
import ColorSaved from './components/TemplatesComponents/ColorSaved/ColorSaved';
import LightSpring from './components/TemplatesComponents/Spring/LightSpring';
import ClearSpring from './components/TemplatesComponents/Spring/ClearSpring';
import CoolSummer from './components/TemplatesComponents/Summer/CoolSummer';
import SoftSummer from './components/TemplatesComponents/Summer/SoftSummer';
import LightSummer from './components/TemplatesComponents/Summer/LightSummer';
import DeepAutumn from './components/TemplatesComponents/Autumn/DeepAutumn';
import DullAutumn from './components/TemplatesComponents/Autumn/DullAutumn';
import SoftAutumn from './components/TemplatesComponents/Autumn/SoftAutumn';
import DarkWinter from './components/TemplatesComponents/Winter/DarkWinter';
import DeepWinter from './components/TemplatesComponents/Winter/DeepWinter';
import VividWinter from './components/TemplatesComponents/Winter/VividWinter';
import SavedPalette from './components/MyProfleComponents/SavedPalette';
import AboutUs from './components/MyProfleComponents/AboutUs';
import HelpAndFeedback from './components/MyProfleComponents/HelpAndFeedback';
import SecurityAndPrivacy from './components/MyProfleComponents/SecurityAndPrivacy';
import TermsOfUse from './components/MyProfleComponents/TermsOfUse';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        <Stack.Screen name="Springscheme" component={Springscheme} options={{ headerShown: false }} />
        <Stack.Screen name="Summerscheme" component={Summerscheme} options={{ headerShown: false }} />
        <Stack.Screen name="Winterscheme" component={Winterscheme} options={{ headerShown: false }} />
        <Stack.Screen name="Autumnscheme" component={Autumnscheme} options={{ headerShown: false }} />
        <Stack.Screen name="WarmSpring" component={WarmSpring} options={{ headerShown: false }} />
        <Stack.Screen name="LightSpring" component={LightSpring} options={{ headerShown: false }} />
        <Stack.Screen name="ClearSpring" component={ClearSpring} options={{ headerShown: false }} />
        <Stack.Screen name="ColorSaved" component={ColorSaved} options={{ headerShown: false }}  />
        <Stack.Screen name="CoolSummer" component={CoolSummer} options={{ headerShown: false }}  />
        <Stack.Screen name="SoftSummer" component={SoftSummer} options={{ headerShown: false }}  />
        <Stack.Screen name="LightSummer" component={LightSummer} options={{ headerShown: false }}  />
        <Stack.Screen name="DeepAutumn" component={DeepAutumn} options={{ headerShown: false }}  />
        <Stack.Screen name="DullAutumn" component={DullAutumn} options={{ headerShown: false }}  />
        <Stack.Screen name="SoftAutumn" component={SoftAutumn} options={{ headerShown: false }}  />
        <Stack.Screen name="DeepWinter" component={DeepWinter} options={{ headerShown: false }}  />
        <Stack.Screen name="DarkWinter" component={DarkWinter} options={{ headerShown: false }}  />
        <Stack.Screen name="VividWinter" component={VividWinter} options={{ headerShown: false }}  />
        <Stack.Screen name="SavedPalette" component={SavedPalette} options={{ headerShown: false }}  />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }}  />
        <Stack.Screen name="HelpAndFeedback" component={HelpAndFeedback} options={{ headerShown: false }}  />
        <Stack.Screen name="TermsOfUse" component={TermsOfUse} options={{ headerShown: false }}  />
        <Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacy} options={{ headerShown: false }}  />







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
      <View style={styles.content}>
        <Display onPress={handleLogInPress} />
      </View>
    </View>
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