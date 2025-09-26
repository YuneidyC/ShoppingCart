import cart from '../assets/cart.png';

import '../App.css';

function Navbar() {
    return (
        <>
            <div className="flex flex-row bg-white px-[20px] h-[48px] w-full justify-between items-center shadow-md nav-bar">
                <h1 className="text-black text-[24px]">Shopping Cart</h1>
                <button className="w-[30px] h-[30px] cursor-pointer">
                    <img className="w-[30px] h-[30px]" src={cart} alt="cart" />
                </button>
            </div>
        </>
    );
}

export default Navbar;
