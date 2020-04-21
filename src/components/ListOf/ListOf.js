import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router';
const ListOf = ({ items, location }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={uuidv4()}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              state: { from: location },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ListOf);
