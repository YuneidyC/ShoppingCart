import { useContext } from 'react';
import { Link } from 'react-router';

import cart from '@Assets/cart.png';

import '@Styles/App.css';

import Cart from '@Component/Cart';

import AppContext from '@Context/AppContext';

function Navbar() {
    const {
        items,
        totalCartItems,
        openCart,
        setOpenCart,
        productList,
        setProductList,
    } = useContext(AppContext);

    const handleClick = () => {
        if (!productList) {
            setProductList(true);
        }
    };

    return (
        <>
            <nav>
                <ul className="h-full flex items-center justify-between">
                    <li className="font-weight" onClick={() => handleClick()}>
                        <Link className={"font-weight"} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <h1 className="text-black text-[24px]">
                            Shopping Cart
                        </h1>
                    </li>
                    <li>
                        <button
                            className="w-[30px] h-[30px] cursor-pointer"
                            onClick={() => setOpenCart((prev) => !prev)}
                        >
                            <img
                                className="w-[30px] h-[30px]"
                                src={cart}
                                alt="cart"
                            />
                            {items.cart.length > 0 ? (
                                <div className="w-[20px] h-[20px] text-sm font-semibold absolute top-0 right-4 m-[2px] rounded-[40px] bg-(--color-mustard)">
                                    {totalCartItems()}
                                </div>
                            ) : null}
                        </button>
                        {openCart ? <Cart /> : ""}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
