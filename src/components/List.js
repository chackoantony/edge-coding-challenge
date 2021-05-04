import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../redux/actions';
import Error from './Error';
import ListItem from './ListItem';

const List = props => {
  const currentUrl = useSelector(state => state.data.currentUrl)
  const data = useSelector(state => state.data.data[currentUrl] || [])
  const status = useSelector(state => state.data.status)
  const error = useSelector(state => state.data.error)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actions.fetchData())
  }, [dispatch]);

  if(status === 'pending'){
    return(
      <div className='loader'>loading....</div>
    )
  }

  if(status === 'failure'){
    return( <Error msg={error}/> )
  }
  
  return (
    <div className='search-result'>
      <table id='list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Super Power</th>
            <th>End of Era</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <ListItem key={index} item={item} /> ) }  
        </tbody>
      </table>
    </div>
  );
};

export default List;