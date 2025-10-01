import { useState } from 'react';

import cart from '../assets/cart.png';

import '../App.css';
import Cart from './Cart';

function Navbar({ items, addToCart, reduceItem, removeFromCart }) {
    const [openCart, setOpenCart] = useState(false);

    const totalCartItems = () => {
        let totalCartItems = 0;
        items.cart.forEach((item) => {
            totalCartItems += item.qty;
        });
        return totalCartItems;
    };

    return (
        <>
            <div className="navbar">
                <h1 className="text-black text-[24px]">Shopping Cart </h1>
                <button
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={() => setOpenCart((prev) => !prev)}
                >
                    <img className="w-[30px] h-[30px]" src={cart} alt="cart" />
                    {items.cart.length > 0 ? (
                        <div className="w-[20px] h-[20px] text-sm font-semibold absolute top-0 right-4 m-[2px] rounded-[40px] bg-orange-200">
                            {totalCartItems()}
                        </div>
                    ) : null}
                </button>
            </div>
            {openCart ? (
                <Cart
                    items={items}
                    addToCart={addToCart}
                    reduceItem={reduceItem}
                    removeFromCart={removeFromCart}
                />
            ) : (
                ''
            )}
        </>
    );
}

export default Navbar;
