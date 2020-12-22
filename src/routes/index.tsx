import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen name="Pokedex" component={Pokedex} />
    </App.Navigator>
  );
};

export default AppRoutes;
