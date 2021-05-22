import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getPlaceById} from '../services/placesApi';
import PlaceDetail from '../components/places/PlaceDetail';

export const PlaceDetailContainer = () => {
    
    const [place, setPlace] = useState();
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    

    useEffect(() => {
        getPlaceById(id)
        .then(setPlace)
        .finally(() => setLoading(false))
    }, [id]);

    

    if(loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <PlaceDetail place={place}/>
            
        </>
    )
}
