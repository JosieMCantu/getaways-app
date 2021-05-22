import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Place = ({
  name,
  description,
  location,
  // pricePerNight,
  image,
  // imageThumbnail,
  // maxGuests,
  // petFriendly,
  // pool,
  // wifi,
  id,
}) => {
  
  return (
    <><Link to={`/${id}`}>
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{location}</p>
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
