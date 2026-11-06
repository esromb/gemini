import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders Gemini chat component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Work in Progress. This component will be used to chat with Gemini chat bot/i);
  expect(linkElement).toBeInTheDocument();
});
