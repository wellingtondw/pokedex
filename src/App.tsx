import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
