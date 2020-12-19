import React from 'react';
import { render } from '@testing-library/react-native';
import Test from '.';

describe('test', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Test />);

    expect(getByText(/hello world/i)).toBeTruthy();
  });
});
