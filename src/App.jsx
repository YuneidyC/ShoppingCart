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
            .then((data) => setProducts(data))
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <ProductList products={products}></ProductList>
        </>
    );
}

export default App;
