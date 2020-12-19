import React from 'react';
import { Container } from '../../styles/common';

import CustomText from '../../components/CustomText';

const Home: React.FC = () => {
  return (
    <Container>
      <CustomText>What Pokemon are you looking for?</CustomText>
    </Container>
  );
};

export default Home;
