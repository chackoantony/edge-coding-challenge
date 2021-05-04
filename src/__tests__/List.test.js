import React from 'react'
import { waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from '../components/List'
import { render, response } from '../test-utils'
import axios from 'axios';

afterEach(cleanup)
jest.mock('axios');

describe('<List/>', () => {
  const initialState = {
    currentUrl: null,
    data: {}, 
    status: 'idle', 
    error: null
  }

  it('displays loading text', async () => {
    axios.get.mockResolvedValueOnce(response)
    render(<List />,  { data: initialState })
    expect(screen.getByText('loading....')).toBeInTheDocument()
  })

  it('loads and displays data', async () => {
    axios.get.mockResolvedValueOnce(response)
    render(<List />,  { data: initialState })
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
    expect(screen.getByText(response.data[0].name.toUpperCase())).toBeInTheDocument()
  })

  it('shows API error', async () => {
    axios.get.mockRejectedValue(new Error())
    render(<List />,  { data: initialState })
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })
})