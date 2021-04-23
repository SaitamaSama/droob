import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../components/header/header';

test('Check if heading text renders in header', () => {
  act(() => {
    render(<Header />);
  });
  expect(screen.getByText(/Motivation/)).toBeInTheDocument();
});
