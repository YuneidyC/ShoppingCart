import Product from './Product';

import '../App.css';

function ProductList({ products, addToCart }) {
    return (
        <>
            <ul className="product-list">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>
                ))}
            </ul>
        </>
    );
}

export default ProductList;
