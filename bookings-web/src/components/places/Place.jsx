import React from 'react';
import PropTypes from 'prop-types';

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
}) => {
  
  return (
    <>
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{location}</p>
    {/* <p>Night Rate: ${pricePerNight}</p>
    <p>Max guests: {maxGuests}</p>
    <p>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
    <p>{pool ? 'Has a Pool!' : null}</p>
    <p>{wifi ? 'Free Wifi' : null}</p> */}
    </>
  );
};

Place.propTypes = {
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
