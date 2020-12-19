import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
