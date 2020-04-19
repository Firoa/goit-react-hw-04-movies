import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ListOf = ({ items }) => {
    console.log(items);
    return(
  
    <ul>
      {items.map((item) => (
        <li  key={uuidv4()} ><Link to={`/movies/${item.id}`}>{item.title}</Link></li>
      ))}
    </ul>
  
)};

export default ListOf;