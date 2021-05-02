import React from 'react';

const List = props => {
  return (
    <div className='search-result'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Super Power</th>
            <th>End of Era</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Athena</td>
            <td>FLY</td>
            <td>12/12/2021</td>
          </tr>
          <tr>
            <td>Athena</td>
            <td>FLY</td>
            <td>12/12/2021</td>
          </tr>
          <tr>
            <td>Athena</td>
            <td>FLY</td>
            <td>12/12/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default List;