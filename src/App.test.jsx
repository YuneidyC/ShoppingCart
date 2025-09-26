import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('renders hello', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});
