import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, View } from 'react-native';

import Test from './components/test';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Test />
    </View>
  );
};

export default App;
