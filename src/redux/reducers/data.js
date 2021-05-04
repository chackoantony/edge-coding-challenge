import { START_FETCH, SET_DATA, SET_ERROR } from '../actionTypes';

const initialState = {
  currentUrl: null,
  data: {}, 
  status: 'idle', 
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        status: 'pending'
      }
    case SET_DATA:
      const { url, data } = action;
      state.data[url] = data 
      return {
        ...state,
        currentUrl: url,
        status: 'success'
      }
    case SET_ERROR:
      return {
        ...state, 
        status: 'failure', 
        error: action.error
      }  
    default:
      return state;
  }
}

export default dataReducer