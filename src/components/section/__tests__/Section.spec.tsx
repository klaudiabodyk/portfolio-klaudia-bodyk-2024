import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import Section from "../Section";
import i18n from "../../../i18n";

describe('Section component', () => {
    it('renders the section with the correct title and image', () => {
        const title = 'hello';
        const image = 'path/to/image.jpg';
        const additional = <div>Additional content</div>;
        render(
            <I18nextProvider i18n={i18n}>
                <Section title={title} image={image} additional={additional} />
            </I18nextProvider>
        );
        expect(screen.getByText(i18n.t(title))).toBeInTheDocument();
        const section = screen.getByTestId('section-hello');
        expect(section).toBeInTheDocument();
        expect(screen.getByText('Additional content')).toBeInTheDocument();
    });
});
