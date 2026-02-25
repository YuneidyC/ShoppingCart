import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import useInitialState from './hooks/useInitialState';

const productA = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: {
        rate: 3.9,
        count: 120,
    },
};

const productB = {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
        rate: 4.1,
        count: 259,
    },
};

describe('E-commerce Cart', () => {
    // small test harness: render a component that exposes the hook

    function HookWrapper({ onReady }) {
        const h = useInitialState();
        React.useEffect(() => {
            onReady && onReady(h);
        }, [h]);
        return null;
    }

    let hook = null;

    beforeEach(async () => {
        hook = null;
        render(<HookWrapper onReady={(h) => (hook = h)} />);
        await waitFor(() => {
            if (!hook) throw new Error('hook not ready');
        });
    });

    it('adds, increments, sums, reduces and removes products in cart', async () => {
        await waitFor(() => hook !== null);

        act(() => {
            hook.addToCart(productA);
        });

        expect(hook.items.cart.length).toBe(1);
        expect(hook.items.cart[0].qty).toBe(1);

        act(() => {
            hook.addToCart(productA);
        });

        expect(hook.items.cart[0].qty).toBe(2);
        expect(hook.totalCartItems()).toBe(2);

        act(() => {
            hook.addToCart(productB);
        });

        expect(hook.items.cart.length).toBe(2);
        const expectedSum = (productA.price * 2 + productB.price * 1).toFixed(
            2,
        );
        expect(hook.sumTotal()).toBe(expectedSum);

        // reduce one qty of productA (from 2 to 1)
        const aItem = hook.items.cart.find((i) => i.id === productA.id);
        act(() => {
            hook.reduceItem(
                aItem,
                hook.items.cart.findIndex((i) => i.id === productA.id),
            );
        });
        expect(hook.items.cart.find((i) => i.id === productA.id).qty).toBe(1);

        // remove productB by id
        act(() => {
            hook.removeFromCart(
                productB.id,
                hook.items.cart.findIndex((i) => i.id === productB.id),
            );
        });
        expect(
            hook.items.cart.find((i) => i.id === productB.id),
        ).toBeUndefined();

        // reduce productA when qty is 1 -> should remove it
        const idxA = hook.items.cart.findIndex((i) => i.id === productA.id);
        act(() => {
            hook.reduceItem(hook.items.cart[idxA], idxA);
        });
        expect(
            hook.items.cart.find((i) => i.id === productA.id),
        ).toBeUndefined();
    });
});
