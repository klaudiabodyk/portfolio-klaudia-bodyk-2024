import { render, screen } from '@testing-library/react';
import {createMemoryRouter, MemoryRouter, Router} from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders Parallax component', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    const parallaxElement = screen.getByTestId('section-meet');
    expect(parallaxElement).toBeInTheDocument();
  });
});