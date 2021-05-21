export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getPlaceById = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/places/${id}`);
  if (res.ok) {
    const result = await res.json();

    return {
        name: result.name,
        image: result.image,
        description: result.description,
        location: result.location,
        pricePerNight: result.price_per_night,
        imageThumbnail: result.image_thumbnail,
        maxGuests: result.max_guests,
        petFriendly: result.pet_friendly,
        pool: result.pool,
        wifi: result.wifi,
    }
  }
}