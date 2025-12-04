import { useContext, useEffect } from 'react';
import { Link } from 'react-router';

import arrow from '@Assets/left-arrow.png';
import add from '@Assets/add.png';
import minus from '@Assets/minus.png';
import close from '@Assets/close.png';
import americanExpress from '@Assets/american-express.svg';
import googlePay from '@Assets/google-pay.svg';
import paypal from '@Assets/paypal.svg';
import applePay from '@Assets/apple-pay.svg';
import visa from '@Assets/visa.svg';

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
        sumTotal,
        setDisableButton,
        setOpenCart,
    } = useContext(AppContext);

    useEffect(() => {
        setOpenCart(false);
        setDisableButton(false);
    });

    const handleClick = () => {
        if (checkout) {
            setProductList(checkout);
            setCheckout(!checkout);
        }
    };

    return (
        <>
            <div className="w-[900px] m-auto top-[50px] relative">
                <button
                    className="fixed w-full h-[50px] flex items-center bg-white top-[47px]"
                    onClick={() => handleClick()}
                >
                    <img
                        className="h-[18px] mr-[10px]"
                        src={arrow}
                        alt="Arrow"
                    />
                    <Link to="/">Continue shopping</Link>
                </button>
                <div className="cart-container h-[calc(100vh-235px)] pt-[60px] overflow-auto">
                    {items.cart.map((item, index) => (
                        <div className="checkout-elements">
                            <p className="w-[50px] text-center">{1+index}</p>
                            <img
                                className="w-[100px] h-[100px] mr-[10px]"
                                src={item.image}
                                alt={item.name}
                            />
                            <p className="font-semibold justify-self-auto">
                                {item.title}
                            </p>
                            <div className="flex w-[70px] h-[22px]">
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
                <div className="total-checkout grid justify-self-center items-center w-[900px] py-5">
                    <div className="total-value flex justify-self-end items-center w-[150px]">
                        <button className="left-100 absolute bg-black rounded-sm text-white w-[150px] h-[30px] cursor-pointer font-bold">
                            Pay
                        </button>
                        <p className="font-bold">Total: </p>
                        <p className="absolute right-0 font-weight">${sumTotal()}</p>
                    </div>
                    <div className="line w-full bg-gray-400 h-[1px]"></div>
                    <div className="method-payment w-[300px] flex justify-center gap-3">
                        <img
                            className="w-[30px] h-[30px]"
                            src={visa}
                            alt="Visa"
                        />
                        <img
                            className="w-[30px] h-[30px]"
                            src={americanExpress}
                            alt="American Express"
                        />
                        <img
                            className="w-[30px] h-[30px]"
                            src={paypal}
                            alt="PayPal"
                        />
                        <img
                            className="w-[30px] h-[30px]"
                            src={googlePay}
                            alt="Google Pay"
                        />
                        <img
                            className="w-[30px] h-[30px]"
                            src={applePay}
                            alt="Apple Pay"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
