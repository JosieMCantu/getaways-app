import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';
import {Link} from 'react-router-dom';

const Place = ({
  name,
  description,
  location,
  image,
  id,
}) => {
  
  return (
    <><Link to={`/${id}`}>
    <ul className={styles.mainplace} aria-label='mainplace'>
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{location}</p>
    </li>
    </ul>
    </Link>
    
    </>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
