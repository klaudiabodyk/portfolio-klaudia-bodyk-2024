import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

describe('App Component', () => {
    it('renders Parallax component', () => {
        render(<MemoryRouter initialEntries={['/']}><App/></MemoryRouter>)

        const sectionHello = screen.getByTestId('section-hello');
        expect(sectionHello).toBeInTheDocument();
        const sectionExp = screen.getByTestId('section-experience');
        expect(sectionExp).toBeInTheDocument();
        const sectionMeet = screen.getByTestId('section-meet');
        expect(sectionMeet).toBeInTheDocument();
    });
});