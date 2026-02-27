import { useContext, useEffect } from 'react';

import Product from '@Component/Product';

import AppContext from '@Context/AppContext';

import '@Styles/App.css';

function ProductList() {
    const { currentProducts, setDisableButton } = useContext(AppContext);

    // only set disable button once when component mounts
    useEffect(() => {
        setDisableButton(true);
    }, [setDisableButton]);

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
