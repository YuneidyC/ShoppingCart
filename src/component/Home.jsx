import { useContext } from 'react';

import '@Styles/App.css';

import Navbar from '@Component/Navbar';
import ProductList from '@Component/ProductList';
import Checkout from '@Component/Checkout';

import AppContext from '@Context/AppContext';

function Home() {
    const { productList, checkout } = useContext(AppContext);

    return (
        <>
            <Navbar />
            {productList ? <ProductList /> : ''}
            {checkout ? <Checkout /> : ''}
        </>
    );
}

export default Home;
