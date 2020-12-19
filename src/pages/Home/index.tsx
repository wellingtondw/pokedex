import React from 'react';
import { Link } from '@react-navigation/native';

import { Container, Text } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Link to="/Pokedex">Pokedex</Link>
    </Container>
  );
};

export default Home;
