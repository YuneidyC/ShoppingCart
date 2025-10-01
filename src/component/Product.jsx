import addItem from '../assets/add-shopping-cart.png';

import '../App.css';

function Product({ product, addToCart }) {

    const handleAddItem = (item) => {
        addToCart(item);
    }

    return (
        <>
            <li className="h-[240px] grid justify-center items-center">
                <img
                    className="w-[120px] h-[120px] justify-self-center-safe self-center"
                    src={product.image}
                    alt={product.title}
                />
                <div className="h-auto pl-[5px] pb-[5px] grid grid-row-2 grid-cols-2 items-center">
                    <p className="w-[180px] h-[23px] row-span-1 col-span-full text-ellipsis whitespace-nowrap overflow-hidden">
                        {product.title}
                    </p>
                    <p className="w-[60px] row-span-2 font-bold justify-self-start">
                        ${product.price}
                    </p>
                    <img
                        className="w-[25px] h-[25px] row-span-2 cursor-pointer justify-self-end self-start"
                        src={addItem}
                        alt="Add"
                        onClick={() => {handleAddItem(product)}}
                    />
                    <p className="w-[180px] h-[60px] text-sm row-span-1 col-span-full overflow-hidden font-medium text-stone-500">
                        {product.title}
                    </p>
                </div>
            </li>
        </>
    );
}

export default Product;
