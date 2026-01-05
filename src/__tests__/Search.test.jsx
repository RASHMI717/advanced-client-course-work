import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

// Mock react-select to avoid complex interaction in tests
vi.mock('react-select', () => ({
    default: ({ options, value, onChange, placeholder }) => (
        <div data-testid="mock-select">
            <select
                data-testid="select-input"
                value={value ? value.value : ""}
                onChange={(e) => onChange(options.find(o => o.value === e.target.value))}
            >
                <option value="">{placeholder}</option>
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    ),
}));

// Mock react-datepicker
vi.mock('react-datepicker', () => ({
    default: ({ onChange, placeholderText }) => (
        <input
            data-testid="date-picker"
            placeholder={placeholderText}
            onChange={(e) => onChange(new Date(e.target.value))}
        />
    ),
}));

describe('SearchBar Component', () => {
    it('renders all search inputs', () => {
        const onSearch = vi.fn();
        render(<SearchBar onSearch={onSearch} />);

        expect(screen.getByPlaceholderText('Postcode area (e.g. BR1)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Min Price (LKR)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Max Price (LKR)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Min Beds')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Max Beds')).toBeInTheDocument();
        expect(screen.getByTestId('select-input')).toBeInTheDocument();
    });

    it('updates input values when typed', () => {
        const onSearch = vi.fn();
        render(<SearchBar onSearch={onSearch} />);

        const postcodeInput = screen.getByPlaceholderText('Postcode area (e.g. BR1)');
        fireEvent.change(postcodeInput, { target: { value: 'BR1' } });
        expect(postcodeInput.value).toBe('BR1');

        const minPriceInput = screen.getByPlaceholderText('Min Price (LKR)');
        fireEvent.change(minPriceInput, { target: { value: '1000' } });
        expect(minPriceInput.value).toBe('1000');
    });

    it('calls onSearch with correct filters when submitted', () => {
        const onSearch = vi.fn();
        render(<SearchBar onSearch={onSearch} />);

        // Simulate filling the form
        fireEvent.change(screen.getByPlaceholderText('Postcode area (e.g. BR1)'), { target: { value: 'NW1' } });

        // Submit
        fireEvent.click(screen.getByText('Search'));

        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith(expect.objectContaining({
            postcode: 'NW1',
            type: 'Any'
        }));
    });
});
