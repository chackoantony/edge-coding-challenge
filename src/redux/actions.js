import axios from 'axios';
import {START_FETCH, SET_DATA, SET_ERROR } from "./actionTypes";
import { API_ENDPOINT } from '../constants';

export const startFetch = () => ({ type: START_FETCH })
export const setData = (url, data) => ({ type: SET_DATA, url: url, data: data })
export const setError = (err) => ({ type: SET_ERROR, error: err })


export const fetchData = () => {
  return async (dispatch) => {
    const url = API_ENDPOINT
    dispatch(startFetch())
    axios.get(url)
      .then(res =>  { 
        dispatch(setData(url, res.data))
      })
      .catch(err => { 
        dispatch(fetchError())
      })
  }
}

export const searchData = (q) => {
  return async (dispatch, getState) => {
    const url = `${API_ENDPOINT}?search=${q}`
    const data = getState().data.data[url]
    if(data && data.length){
      dispatch(setData(url, data))
    }else{
      dispatch(startFetch())
      axios.get(url)
        .then(res => dispatch(setData(url, res.data.ancients)))
        .catch(err => dispatch(fetchError()))
    }
   
  }
}

const fetchError = () => {
  return  (dispatch) => {
    axios.get(`${API_ENDPOINT}?error=true`)
      .catch(err => dispatch(setError(err.response.data.error)))
      .catch(err => dispatch(setError('Something went wrong')))
  }
}