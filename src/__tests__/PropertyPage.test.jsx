import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import PropertyPage from '../pages/PropertyPage';

// Mock child components that are not the focus
vi.mock('../components/Navbar', () => ({ default: () => <div data-testid="navbar">Navbar</div> }));
vi.mock('../components/Footer', () => ({ default: () => <div data-testid="footer">Footer</div> }));
vi.mock('../components/ImageGallery', () => ({ default: () => <div data-testid="image-gallery">Gallery</div> }));
// Mock Tabs which can be tricky in tests
vi.mock('react-tabs', () => ({
    Tabs: ({ children }) => <div>{children}</div>,
    TabList: ({ children }) => <div>{children}</div>,
    Tab: ({ children }) => <button>{children}</button>,
    TabPanel: ({ children }) => <div>{children}</div>
}));

describe('PropertyPage Component', () => {
    const mockProperty = {
        id: '1',
        title: 'Luxury Family House',
        location: 'Colombo',
        price: 2500000,
        images: ['img1.jpg'],
        bedrooms: 3,
        bathrooms: 3,
        type: 'House',
        longDescription: 'Long desc',
        floorPlan: 'plan.webp'
    };

    // We mock the data/properties.json import
    vi.mock('../data/properties.json', () => ({
        default: [
            {
                id: '1',
                title: 'Luxury Family House',
                location: 'Colombo',
                price: 2500000,
                images: ['img1.jpg'],
                bedrooms: 3,
                bathrooms: 3,
                type: 'House',
                longDescription: 'Long desc',
                floorPlan: 'plan.webp'
            }
        ]
    }));

    it('renders property details', () => {
        const favourites = [];
        const addFavourite = vi.fn();
        const removeFavourite = vi.fn();

        render(
            <MemoryRouter initialEntries={['/property/1']}>
                <Routes>
                    <Route path="/property/:id" element={
                        <PropertyPage
                            favourites={favourites}
                            addFavourite={addFavourite}
                            removeFavourite={removeFavourite}
                        />
                    } />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Luxury Family House')).toBeInTheDocument();
        expect(screen.getByText('Colombo')).toBeInTheDocument();
        expect(screen.getByText('£2500000')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('calls addFavourite when Save button is clicked', () => {
        const favourites = [];
        const addFavourite = vi.fn();
        const removeFavourite = vi.fn();

        render(
            <MemoryRouter initialEntries={['/property/1']}>
                <Routes>
                    <Route path="/property/:id" element={
                        <PropertyPage
                            favourites={favourites}
                            addFavourite={addFavourite}
                            removeFavourite={removeFavourite}
                        />
                    } />
                </Routes>
            </MemoryRouter>
        );

        const saveButton = screen.getByLabelText('Toggle Favourite');
        fireEvent.click(saveButton);
        expect(addFavourite).toHaveBeenCalled();
    });

    it('shows Saved state and calls removeFavourite if already favoured', () => {
        const favourites = [{ id: '1' }]; // Already favoured
        const addFavourite = vi.fn();
        const removeFavourite = vi.fn();

        render(
            <MemoryRouter initialEntries={['/property/1']}>
                <Routes>
                    <Route path="/property/:id" element={
                        <PropertyPage
                            favourites={favourites}
                            addFavourite={addFavourite}
                            removeFavourite={removeFavourite}
                        />
                    } />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Saved')).toBeInTheDocument();

        const saveButton = screen.getByLabelText('Toggle Favourite');
        fireEvent.click(saveButton);
        expect(removeFavourite).toHaveBeenCalledWith('1');
    });
});
