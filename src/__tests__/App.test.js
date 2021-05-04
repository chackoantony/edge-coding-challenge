import React from 'react'
import { waitFor, screen, cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { response, searchResponse } from '../test-utils'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { API_ENDPOINT } from '../constants'


afterEach(cleanup)
jest.mock('axios');

describe('<App/>', () => {
  const initialState = {
    currentUrl: null,
    data: {}, 
    status: 'idle', 
    error: null
  }

  it('loads data on page load', async () => {
    axios.get.mockResolvedValueOnce(response)
    render(<App />,  { data: initialState })
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
    expect(screen.getByText(response.data[0].name.toUpperCase())).toBeInTheDocument()
  })

  it('filters data on search click', async () => {
    axios.get.mockResolvedValueOnce(response)
    render(<App />,  { data: initialState })
    axios.get.mockResolvedValueOnce(searchResponse)
    userEvent.type(screen.getByRole('textbox'), searchResponse.data.ancients[0].name)
    userEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
    expect(screen.getByText(searchResponse.data.ancients[0].name.toUpperCase())).toBeInTheDocument()
  })

  it('loads data from cache if search already performed', async () => {
    const q = 'Test2'
    const url = `${API_ENDPOINT}?search=${q}`
    axios.get.mockResolvedValueOnce(response) // For initial page load
    render(<App />)
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
    axios.get.mockResolvedValueOnce(searchResponse)
    userEvent.type(screen.getByRole('textbox'), q)
    userEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
    expect(screen.getByText(q.toUpperCase())).toBeInTheDocument()
    userEvent.type(screen.getByRole('textbox'), '{selectall}Test2')
    userEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
  })
})