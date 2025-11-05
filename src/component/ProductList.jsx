import { useContext } from 'react';

import Product from './Product';

import AppContext from '../context/AppContext';

import '../App.css';

function ProductList() {
    const { currentProducts } = useContext(AppContext);

    return (
        <>
            <ul className="product-list">
                {currentProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
        </>
    );
}

export default ProductList;
