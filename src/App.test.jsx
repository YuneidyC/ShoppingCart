import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
    it('renders hello', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it('renders Hello World! after button click', async () => {
        const user = userEvent.setup();

        render(<App />);
        await user.click(screen.getByRole('button', { name: /click me/i }));

        expect(screen.getByRole('heading').textContent).toMatch(
            /hello world!/i,
        );
    });
});
