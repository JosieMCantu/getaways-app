import React from 'react'
import PropTypes from 'prop-types'
import styles from '../app/App.css';

function PlaceDetail({place: {
    name, image, description, location, pricePerNight, maxGuests, petFriendly,
    pool, wifi
}}) {
    return (
        <div className={styles.pcontainer}>
            <ul className={styles.pitem} aria-label='place'>
            <li><h1>::: {name} :::</h1></li>
            <li><p><img src={image} alt={name} /></p></li>
            <li><p>{description}</p>
            <p>{location}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Max Guest: {maxGuests}</p>
            <p>{petFriendly}</p>
            <p>{pool}</p>
            <p>{wifi}</p></li>
        </ul>
        </div>
    )
}

PlaceDetail.propTypes = {
    place: PropTypes.object.isRequired,
}

export default PlaceDetail;

