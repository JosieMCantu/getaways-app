require('dotenv').config();
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen} from '@testing-library/react';
import {PlaceDetailContainer} from '../containers/PlaceDetailContainer';
import {MemoryRouter, Route} from 'react-router-dom';
import data from '../fixtures/data.json';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places', (req, res, ctx) => {
        return res(ctx.json({
            "id": "6092e208e9e24bf5b66a86d0",
            "name": "Practical Suites",
            "slug": "practical-suites",
            "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
            "location": "10546 Jaquan Rest, West Shanon, South Carolina, 35257",
            "price_per_night": 530,
            "image": "http://placeimg.com/1080/800",
            "image_thumbnail": "http://placeimg.com/400/400",
            "max_guests": 2,
            "pet_friendly": true,
            "pool": true,
            "wifi": false,
            "createdAt": "2021-05-05T18:20:56.023Z",
            "updatedAt": "2021-05-05T18:20:56.023Z",
            "__v": 0
            }))
    })
)

describe('Getaways Container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders the place detail container to the screen', async () => {

        render(<MemoryRouter initialEntries={['/6092e208e9e24bf5b66a86d0']}><Route path="/:id"><PlaceDetailContainer /></Route></MemoryRouter>)

        const ul = await screen.findByRole('list', {name: 'place'})
        expect(ul).toMatchSnapshot();

    })
})


