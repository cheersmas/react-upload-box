import { cleanup, render } from '@testing-library/react';
import React from 'react';

const Hello = () => <div>Hello</div>;

afterEach(cleanup);

test('renders hello world', () => {
  const { getByText } = render(<Hello />);
  expect(getByText('Hello')).toBeInTheDocument();
});
