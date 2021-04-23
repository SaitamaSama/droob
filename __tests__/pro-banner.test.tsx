import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProBanner } from '../components/pro-banner/pro-banner';

test('Check if Pro-Banner is rendering', () => {
  act(() => {
    render(<ProBanner />);
  });
  expect(screen.getByText(/Pro account/i)).toBeInTheDocument();
  expect(screen.getByText(/Get pro/i)).toBeInTheDocument();
});
