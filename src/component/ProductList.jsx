import Product from './Product';

import '../App.css';

function ProductList({ products }) {
    return (
        <>
            <ul className=' h-(--my-height-product) m-auto p-[50px] grid grid-cols-[repeat(auto-fit,_minmax(_200px,_1fr))] gap-x-3 gap-y-5'>
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </ul>
        </>
    );
}

export default ProductList;
