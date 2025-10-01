import { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';

import './App.css';

const initialState = {
    cart: [],
};

function App() {
    const serverUrl = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState(initialState);

    useEffect(() => {
        fetch(serverUrl)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const addToCart = (payload) => {
        console.log(payload);
        if (items.cart.length >= 0) {
            const found = items.cart.find((element) => {
                return element.id === payload.id;
            });
            if (found !== undefined) {
                found.qty++;
                setItems({
                    ...items,
                    cart: [...items.cart],
                });
            } else {
                payload.qty = 1;
                setItems({
                    ...items,
                    cart: [...items.cart, payload],
                });
            }
        }
    };

    const removeFromCart = (payload, indexValue) => {
        setItems({
            ...items,
            cart: items.cart.filter(
                (items, index) => items.id !== payload && index !== indexValue
            ),
        });
    };

    return (
        <>
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
        </>
    );
}

export default App;
