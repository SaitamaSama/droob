import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../components/button/button';

test('Check for text in button', () => {
  act(() => {
    render(<Button onClick={() => 'I was clicked'} text={'Click me'} />);
  });
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
test('Check for onClick handler', () => {
  const handleClick = jest.fn();
  act(() => {
    render(<Button onClick={handleClick} text={'Click me'} />);
  });
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
