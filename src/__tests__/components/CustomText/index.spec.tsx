import React from 'react';
import { render } from '@testing-library/react-native';

import CustomText from '../../../components/CustomText';

describe('<CustomText />', () => {
  it('should render primary format', () => {
    const { getByText } = render(
      <CustomText>What Pokemon are you looking for?</CustomText>,
    );

    expect(getByText('What Pokemon are you looking for?').props.style).toEqual([
      {
        fontSize: 30,
        lineHeight: 42,
        color: '#303943',
        fontFamily: 'CircularStd-Bold',
      },
    ]);
  });
});
