import React, { useRef, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions';

const SearchBox = props => {
  const dispatch = useDispatch()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const textInput = useRef(null);

  const onClickHandler = useCallback(async () => {
    if(textInput.current.value.trim()){
      dispatch(actions.searchData(textInput.current.value)) 
    }
  }, [dispatch]);

  const onChangeHandler = useCallback(async () => {
    if(textInput.current.value.trim()){
      setIsButtonDisabled(false)
    }else{
      setIsButtonDisabled(true)
    }  
  }, [setIsButtonDisabled]);

  return (
    <div className="search-box">
      <input type='text' ref={textInput} onChange={onChangeHandler} placeholder='Search by name'/> 
      <button  onClick={onClickHandler} disabled={isButtonDisabled} >Search</button>
    </div> 
  );
};


export default SearchBox;