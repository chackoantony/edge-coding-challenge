import React from 'react'
import { waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from '../components/List'
import { render, response } from '../test-utils'
import axios from 'axios';
import SearchBox from '../components/SearchBox'
import userEvent from '@testing-library/user-event';

afterEach(cleanup)
jest.mock('axios');

describe('<SearchBox/>', () => {
  const initialState = {
    currentUrl: null,
    data: {}, 
    status: 'idle', 
    error: null
  }

  it('displays search input', async () => {
    render(<SearchBox />,  { data: initialState })
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays disabled button', async () => {
    render(<SearchBox />,  { data: initialState })
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('enables button on typing', async () => {
    render(<SearchBox />,  { data: initialState })
    userEvent.type(screen.getByRole('textbox'), 'test')
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
})