import React from 'react';
import {useEffect, useState} from 'react';
import {getPlaces} from '../services/placesApi';

export const useGetaways = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces()
    .then(setPlaces)
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, []);

  return {places, loading}
}
