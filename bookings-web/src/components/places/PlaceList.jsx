import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';

const PlaceList =({ places }
  ) => {
  return (<ul aria-label='places'>
    {places.map((place) => (
      <li key={place.id}>
        <Place {...place} />
      </li>
    ))}
  </ul>)
}

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlaceList;

