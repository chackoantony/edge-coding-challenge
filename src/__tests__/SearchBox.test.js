import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

test('renders search box', () => {
  render(<SearchBox />);
  const button = screen.getByText(/Search/i);
  expect(button).toBeInTheDocument();
});
