import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Divide from '../src/pages/object-properties/Divide';

test('Description links navigate to the correct pages', () => {
    render(
        <MemoryRouter>
            <Divide />
        </MemoryRouter>
    );

    const descriptionLinkElements = screen.getAllByText('Descriptions');

    descriptionLinkElements.forEach((link) => {
        fireEvent.click(link);

        const dynamicPart = link.props.to.split('/').pop(); // Kinyerjük a dinamikus részt

        // A helyes URL összeállítása
        const expectedUrl = `https://tailwindcss.com/docs/${dynamicPart}`;

        expect(window.location.href).toBe(expectedUrl);

        window.history.back();
    });
});
