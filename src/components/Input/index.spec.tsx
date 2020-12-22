import React from 'react';
import { render } from '@testing-library/react-native';

import Input from '.';

describe('<CustomText />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Input placeholder="Teste" />);

    expect(getByTestId('container').children).toHaveLength(1);
    expect(getByTestId('container').findAllByType('TextInput')).toHaveLength(1);
  });

  it('should render with search icon', () => {
    const { getByTestId } = render(<Input search />);

    expect(getByTestId('container').children).toHaveLength(2);
    expect(getByTestId('container').findAllByType('Text')).toHaveLength(1);
    expect(getByTestId('container').findAllByType('TextInput')).toHaveLength(1);
  });
});
