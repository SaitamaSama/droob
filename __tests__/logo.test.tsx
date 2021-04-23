import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logo } from '../components/logo/logo';

test('Check if text is rendering in Logo', () => {
  act(() => {
    render(<Logo width={64} height={64} />);
  });
  expect(screen.getByText(/B/)).toBeInTheDocument();
});
