import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Status info', () => {
  render(<App />);
  expect(screen.getByText(/Status:/i)).toBeInTheDocument();
});
