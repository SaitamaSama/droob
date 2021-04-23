import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tabs } from '../components/tabs/tabs';

test('Check if tabs are rendered', () => {
  const tabs = [
    {
      id: 1,
      text: 'Tab 1'
    },
    {
      id: 2,
      text: 'Tab 2'
    }
  ];
  act(() => {
    render(<Tabs tabs={tabs} onChange={() => {}} active={1} />);
  });
  expect(screen.getByText(/Tab 1/)).toBeInTheDocument();
  expect(screen.getByText(/Tab 2/)).toBeInTheDocument();
});
