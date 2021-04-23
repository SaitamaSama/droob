import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavLinks } from '../components/nav-links/nav-links';

test('Check if all the links are rendered', () => {
  act(() => {
    render(<NavLinks />);
  });
  expect(screen.getByText(/Motivation/)).toBeInTheDocument();
  expect(screen.getByText(/Productivity/)).toBeInTheDocument();
  expect(screen.getByText(/Design/)).toBeInTheDocument();
  expect(screen.getByText(/Study/)).toBeInTheDocument();
});
