import { useContext } from 'react';
import { Link } from 'react-router';

import '../App.css';

import CartItems from './CartItems';

import AppContext from '../context/AppContext';

function Cart() {
    const { items, addToCart, removeFromCart, reduceItem, setCheckout } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty;
        const sum = items.cart.reduce(reducer, 0);
        return sum.toFixed(2);
    };

    return (
        <>
            <div className="w-[350px] h-[470px] bg-white z-40 fixed right-0 mr-[8px] mt-[8px] shadow-md rounded-md flex flex-col my-[30px]">
                <div className="mx-[20px] mt-[20px]">
                    <div className="w-full h-[350px] overflow-auto">
                        {items.cart.map((item, index) => (
                            <CartItems
                                item={item}
                                key={item.id}
                                index={index}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                reduceItem={reduceItem}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between font-weight my-[10px]">
                        <p>
                            <span>Total: </span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                </div>
                <button
                    className="w-auto p-[8px] self-center shadow-md rounded-md bg-(--color-mustard) cursor-pointer"
                    onClick={() => setCheckout((prev) => !prev)}
                >
                    <Link className={"font-weight"} to={"/checkout"}>Checkout</Link>
                </button>
            </div>
        </>
    );
}

export default Cart;
