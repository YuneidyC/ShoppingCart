import { useContext } from 'react';

import '../App.css';

import Navbar from './Navbar';
import ProductList from './ProductList';

import AppContext from '../context/AppContext';
import Checkout from './Checkout';

function Home() {
    const { productList, checkout } = useContext(AppContext);

    return (
        <>
            <Navbar />
            {productList ? <ProductList /> : '' }
            {checkout ? <Checkout /> : '' }
        </>
    );
}

export default Home;
