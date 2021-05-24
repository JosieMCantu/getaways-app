import React from 'react';
import PlaceList from '../components/places/PlaceList';
import {useGetaways} from '../hooks/useGetaways';

const Getaways = () => {
  const {places, loading} = useGetaways();

  if(loading) { 
    return <h1>Loading...</h1>
}
  return <PlaceList places={places} />;
};

export default Getaways;
