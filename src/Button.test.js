import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/ui/button';

test('renders the button component', () => {
  render(<Button />);
});