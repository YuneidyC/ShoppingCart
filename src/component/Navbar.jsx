import cart from '../assets/cart.png';

import '../App.css';
import Cart from './Cart';

function Navbar({ items, addToCart, reduceItem, removeFromCart }) {
    return (
        <>
            <div className="navbar">
                <h1 className="text-black text-[24px]">Shopping Cart</h1>
                <button className="w-[30px] h-[30px] cursor-pointer">
                    <img className="w-[30px] h-[30px]" src={cart} alt="cart" />
                </button>
            </div>
        </>
    );
}

export default Navbar;
