import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {Provider} from 'react-redux';
import {Store} from './reduxStore/Store';
import HomeScreen from './screens/HomeScreen';

import IntroScreen from './screens/IntroScreen';
import LoginOTPScreen from './screens/LoginOTPScreen';
import ScannerScreen from './screens/ScannerScreen';
import HomeSearchScreen from './screens/HomeSearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import BillsScreen from './screens/BillsScreen';
import SingleBillScreen from './screens/SingleBillScreen';
import ReferScreen from './screens/ReferScreen';
import NotificationScreen from './screens/NotificationScreen';
import RedeemScreen from './screens/RedeemScreen';
import UPIScreen from './screens/UPIScreen';
import UserScreen from './screens/UserScreen';
import SupportScreen from './screens/SupportScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoginOTPScreen" component={LoginOTPScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
        <Stack.Screen name="HomeSearchScreen" component={HomeSearchScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="BillsScreen" component={BillsScreen} />
        <Stack.Screen name="SingleBillScreen" component={SingleBillScreen} />
        <Stack.Screen name="ReferScreen" component={ReferScreen} />
        <Stack.Screen name="RedeemScreen" component={RedeemScreen} />
        <Stack.Screen name="UPIScreen" component={UPIScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
