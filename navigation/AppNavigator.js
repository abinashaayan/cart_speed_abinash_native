import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import VerificationScreen from '../screens/VerificationScreen';
import CreateNewPassword from '../screens/CreateNewPassword';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import Certificate from '../screens/Certificate';
import Profile from '../screens/Profile';
import MainTabNavigator from './MainTabNavigator';
import EditProfile from '../screens/EditProfile';
import VideoScreen from '../screens/VideoScreen';
import LocalMapScreen from '../screens/LocalMapScreen';
import CartingRulesScreen from '../screens/CartingRulesScreen';
import TrainingScreen from '../screens/TrainingScreen';
import AssessmentScreen from '../screens/AssessmentScreen';
import ResultScreen from '../screens/ResultScreen';
import LsvPractice from '../screens/LsvPractice';
import Notofication from '../screens/Notofication';
import PasswordUpdateScreen from '../screens/PasswordUpdateScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Certificate" component={Certificate} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LocalMapScreen" component={LocalMapScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CartingRulesScreen" component={CartingRulesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AssessmentScreen" component={AssessmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LsvPractice" component={LsvPractice} options={{ headerShown: false }} />
        <Stack.Screen name="Notofication" component={Notofication} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordUpdateScreen" component={PasswordUpdateScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={{ headerShown: false }} />

        <Stack.Screen name="MainApp" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
