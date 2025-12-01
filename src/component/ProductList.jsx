import { useContext } from 'react';

import Product from '@Component/Product';

import AppContext from '@Context/AppContext';

import '@Styles/App.css';

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
