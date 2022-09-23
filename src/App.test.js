import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 text', () => {
  render(<App />);
  const linkElement = screen.getByText(/World Countries Data/i);
  expect(linkElement).toBeInTheDocument()
});
