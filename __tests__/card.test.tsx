import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/card/card';

test('Check title only card', () => {
  act(() => {
    render(
      <Card
        title={'Basic Card'}
        background={'/assets/bg_1.jpg'}
        variant={'tall'}
      />
    );
  });
  expect(screen.getByText(/Basic Card/)).toBeInTheDocument();
});

test('Check button in a card', () => {
  const clickHandler = jest.fn();
  act(() => {
    render(
      <Card
        title={'Basic Card'}
        background={'/assets/bg_1.jpg'}
        variant={'tall'}
        button={{
          text: 'Card action button',
          onClick: clickHandler
        }}
      />
    );
  });

  expect(screen.getByText(/Card action button/)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Card action button/));
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

test('Check play button in a video card', () => {
  act(() => {
    render(
      <Card
        title={'Basic Card'}
        background={'/assets/bg_1.jpg'}
        variant={'tall'}
        video={{
          src: ''
        }}
      />
    );
  });

  expect(screen.getByTestId('play-button')).toBeInTheDocument();
});
