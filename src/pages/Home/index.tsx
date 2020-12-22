import React from 'react';
import { Container } from '../../styles/common';

import CustomText from '../../components/CustomText';
import Input from '../../components/Input';

const Home: React.FC = () => {
  return (
    <Container>
      <CustomText>What Pokemon are you looking for?</CustomText>
      <Input search placeholder="Search Pokemon, Move, Ability etc" />
    </Container>
  );
};

export default Home;
