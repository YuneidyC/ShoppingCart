import { useContext, useEffect } from 'react';
import { Link } from 'react-router';

import arrow from '@Assets/left-arrow.png';
import add from '@Assets/add.png';
import minus from '@Assets/minus.png';
import close from '@Assets/close.png';

import '@Styles/App.css';

import AppContext from '@Context/AppContext';

function Checkout() {
    const {
        items,
        checkout,
        setCheckout,
        setProductList,
        addToCart,
        removeFromCart,
        reduceItem,
        setOpenCart,
    } = useContext(AppContext);

    useEffect(() => {
        setOpenCart(false);
    });

    const handleClick = () => {
        if (checkout) {
            setProductList(checkout);
            setCheckout(!checkout);
        }
    };

    return (
        <>
            <div className="w-[900px] m-auto">
                <button
                    className="my-[30px] flex items-center"
                    onClick={() => handleClick()}
                >
                    <img
                        className="h-[18px] mr-[10px]"
                        src={arrow}
                        alt="Arrow"
                    />
                    <Link to="/">Continue shopping</Link>
                </button>
                <div>
                    {items.cart.map((item, index) => (
                        <div className="checkout-elements">
                            <p className="w-[50px] text-center">{index}</p>
                            <img
                                className="w-[100px] h-[100px] mr-[10px]"
                                src={item.image}
                                alt={item.name}
                            />
                            <p className="font-semibold justify-self-auto">
                                {item.title}
                            </p>
                            <div className="flex w-[70px]">
                                <img
                                    className="cursor-pointer w-[20px] h-[20px] mx-[5px]"
                                    src={minus}
                                    alt="Minus"
                                    onClick={() => reduceItem(item, index)}
                                />
                                <p>{item.qty}</p>
                                <img
                                    className="cursor-pointer w-[23px] h-[22px] mx-[5px]"
                                    src={add}
                                    alt="Add"
                                    onClick={() => addToCart(item)}
                                />
                            </div>
                            <img
                                className="cursor-pointer w-[15px] h-[15px]"
                                src={close}
                                alt="Remove"
                                onClick={() => removeFromCart(item, index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Checkout;
