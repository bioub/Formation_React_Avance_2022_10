import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SelectFC from './SelectFC'

// test('render SelecFC', () => {
//   render(<SelectFC items={['A', 'B', 'C']} selected='B' onSelected={() => {}} />)
// })

test('render SelectFC', () => {
  render(<SelectFC items={['ABC', 'DEF', 'HIJ']} selected='DEF' onSelected={() => {}} />)

  const selectedItem = screen.getByText(/DEF/i);
  expect(selectedItem).toBeInTheDocument();
});

test('menu open on click', async () => {
  const spy = jest.fn();

  render(<SelectFC items={['ABC', 'DEF', 'HIJ']} selected='DEF' onSelected={spy} />)

  const selectedItem = screen.getByText(/DEF/i);
  await userEvent.click(selectedItem);

  const newItem = screen.getByText(/HIJ/i);
  await userEvent.click(newItem);

  expect(spy).toHaveBeenCalledWith('HIJ')
})
