import { useContext } from 'react';

import add from '@Assets/add.png';
import minus from '@Assets/minus.png';
import close from '@Assets/close.png';

import '@Styles/App.css';

import AppContext from '@Context/AppContext';

function CartItems({ item, index }) {
    const { addToCart, removeFromCart, reduceItem } = useContext(AppContext);

    return (
        <>
            <div className="h-[60px] flex mt-[24px] items-center">
                <img
                    className=" w-[60px] h-[70px] m-[10px]"
                    src={item.image}
                    alt={item.title}
                />
                <div className="mx-[12px]">
                    <p className="w-[178px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                        {item.title}
                    </p>
                    <p>${item.price}</p>
                    <div className="flex">
                        <img
                            className="w-[24px] h=[24px] cursor-pointer"
                            src={minus}
                            onClick={() => reduceItem(item, index)}
                            alt="Minus"
                        />
                        <p className="mr-[8px] ml-[8px]">{item.qty}</p>
                        <img
                            className="w-[24px] h=[24px] cursor-pointer"
                            src={add}
                            onClick={() => addToCart(item)}
                            alt="Add"
                        />
                    </div>
                </div>
                <img
                    className="cursor-pointer w-[20px] h-[20px]"
                    src={close}
                    alt="Close"
                    onClick={() => removeFromCart(item, index)}
                />
            </div>
        </>
    );
}

export default CartItems;
