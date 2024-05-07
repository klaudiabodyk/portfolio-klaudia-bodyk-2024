import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from "../Menu";

describe('Menu component', () => {
    it('renders without crashing', () => {
        render(<Menu/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('toggles menu on button click', () => {
        render(<Menu/>);
        const menuButton = screen.getByRole('button');
        fireEvent.click(menuButton);
        expect(screen.getByText('contact')).toBeDefined();
    });

    test('renders navigation items', () => {
        render(<Menu/>);
        const menuButton = screen.getByRole('button');
        fireEvent.click(menuButton);
        expect(screen.getByText('contact')).toBeDefined();
        expect(screen.getByText('github')).toBeDefined();
        expect(screen.getByText('email')).toBeDefined();
    });
});
