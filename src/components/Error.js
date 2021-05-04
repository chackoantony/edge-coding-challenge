import React from 'react';

const Error = props => {
  return (
    <div className="error">
     {props.msg}
    </div> 
  );
};

export default Error;