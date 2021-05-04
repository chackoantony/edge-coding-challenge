import React from 'react';
import moment from 'moment'

const ListItem = props => {
  const { item } = props
  return (
    <tr>
      <td>{item.name.toUpperCase()}</td>
      <td>{item.superpower}</td>
      <td>{moment(item.end_of_an_era).format('DD-MM-YYYY')}</td>
    </tr>
  );
};

export default ListItem;