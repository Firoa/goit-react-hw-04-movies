import React from 'react';
import styles from './Casts.module.css';
const Casts = ({ items }) => {
  if (items === undefined) return <div>WARNING</div>;
  return (
    <div>
      <ul className={styles.castList}>
        {items.map(cast => (
          <li className={styles.castListItem} key={cast.id}>
            {' '}
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
  );
};

export default Casts;
