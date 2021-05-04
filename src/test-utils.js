import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import reducer from './redux/reducers'

const response = {
  data: [
          {
            "name": "Test",
            "superpower": "TestPower",
            "end_of_an_era": "1014-11-17T00:00:00.000+00:00"
          }, 
          {
            "name": "Test2",
            "superpower": "TestPower2",
            "end_of_an_era": "1014-10-17T00:00:00.000+00:00"
          }
        ]
}

const searchResponse = {
  data: { 
    ancients: [
          {
            "name": "Test2",
            "superpower": "TestPower2",
            "end_of_an_era": "1014-10-17T00:00:00.000+00:00"
          }
        ]
      }      
}

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(ReduxThunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

// override render method
export { render, response, searchResponse }