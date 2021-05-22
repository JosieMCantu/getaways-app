require('dotenv').config();
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, getByText} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Getaways from '../containers/Getaways';
import PlaceDetailContainer from '../containers/PlaceDetailContainer';
import {MemoryRouter} from 'react-router';
import data from '../fixtures/data.json';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places', (req, res, ctx) => {
        return res(ctx.json(data))
    })
)

describe('Getaways Container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders the getaways container to the screen', async () => {

        render(<MemoryRouter><Getaways /></MemoryRouter>)

        screen.getByText('Loading...')

        const ul = await screen.findByRole('list', {name: 'places'})
        expect(ul).not.toBeEmptyDOMElement();
    })
})