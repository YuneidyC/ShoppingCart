import { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';

import './App.css';

function App() {
    const serverUrl = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(serverUrl)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

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
                removeFromCart={removeFromCart}
        </>
    );
}

export default App;
