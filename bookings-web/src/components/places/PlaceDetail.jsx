import React from 'react'
import PropTypes from 'prop-types'

function PlaceDetail({place: {
    name, image, description, location, pricePerNight, maxGuests, petFriendly,
    pool, wifi
}}) {
    return (
        <>
            <img src={image} alt={name} />
            Name: {name}
            Description: {description}
            Location: {location}
            Price Per Night: {pricePerNight}
            Max Guest: {maxGuests}
            Pet Friendly: {petFriendly}
            Pool: {pool}
            wifi: {wifi}
        </>
    )
}

PlaceDetail.propTypes = {
    place: PropTypes.object.isRequired,
}

export default PlaceDetail;

