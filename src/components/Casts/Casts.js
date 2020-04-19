import React from 'react';

const Casts = ({items})=>{
   if(items === undefined)return(<div>WARNING</div>);    
    return(    
    <div>
      <ul>
        {items.map((cast) => (
          <li key={cast.id}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w154/${cast.profile_path}`}
              alt="human"
            />
            <p>Name:{cast.name} </p>
            <p>Character:{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );}

  export default Casts;