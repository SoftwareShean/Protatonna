import Player from './Player';
import { tracks } from './Player';
import { react, render, screen } from '@testing-library/react';
import { ShallowRenderer } from 'react-dom/test-utils';

const mockPlayer = <Player />;

describe('Player', () => {
    const renderPlayer = () => render(mockPlayer)
    it('video renders annotations', () => {
        render(mockPlayer)
        expect(screen.getByLabelText('newsela video player'))
    })
});