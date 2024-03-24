import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from "../Card";

describe('Card component', () => {
    it('renders header, subheader, and link correctly', () => {
        render(
            <Router>
                <Card
                    header="Test Header"
                    subHeader="Test Subheader"
                    linkTo="/test"
                    linkLabel="Test Link"
                />
            </Router>
        );

        expect(screen.getByText('Test Header')).toBeInTheDocument();
        expect(screen.getByText('Test Subheader')).toBeInTheDocument();
        expect(screen.getByText('Test Link')).toBeInTheDocument();
    });

    it('navigates to the correct link when clicked', () => {
        const { getByText } = render(
            <Router>
                <Card
                    header="Test Header"
                    subHeader="Test Subheader"
                    linkTo="/test"
                    linkLabel="Test Link"
                />
            </Router>
        );

        const link = getByText('Test Link');
        expect(link).toHaveAttribute('href', '/test');
    });
});
