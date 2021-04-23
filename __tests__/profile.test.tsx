import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Profile } from '../components/profile/profile';

test('Check if name and email renders in profile', () => {
  act(() => {
    render(<Profile />);
  });
  expect(screen.getByTestId('prof-name')).toBeInTheDocument();
  expect(screen.getByTestId('prof-email')).toBeInTheDocument();
});
