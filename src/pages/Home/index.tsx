import React from 'react';
import { Text, View } from 'react-native';
import { Link } from '@react-navigation/native';

const Home: React.FC = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link to="/Pokedex">Pokedex</Link>
    </View>
  );
};

export default Home;
