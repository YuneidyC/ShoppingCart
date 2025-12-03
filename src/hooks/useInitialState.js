import { useEffect, useState } from 'react';

import useGetProducts from '@Hooks/useGetProducts';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [items, setItems] = useState(initialState);
    const [currentProducts, setCurrentProducts] = useState([]);
    const initialProducts = useGetProducts();
    const [checkout, setCheckout] = useState(false);
    const [openCart, setOpenCart] = useState(false);
  const [productList, setProductList] = useState(true);
  const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        setCurrentProducts(initialProducts);
    }, [initialProducts]);

    function getAllProducts() {
        setCurrentProducts(initialProducts);
  }

    const totalCartItems = () => {
        let totalCartItems = 0;

        items.cart.forEach((item) => {
            totalCartItems += item.qty;
        });

        return totalCartItems;
    };

    const addToCart = (payload) => {
        if (items.cart.length >= 0) {
            const found = items.cart.find((element) => {
                return element.id === payload.id;
            });
            if (found !== undefined) {
                found.qty++;
                setItems({
                    ...items,
                    cart: [...items.cart],
                });
            } else {
                payload.qty = 1;
                setItems({
                    ...items,
                    cart: [...items.cart, payload],
                });
            }
        }
    };

    const reduceItem = (payload, indexValue) => {
        if (payload.qty > 1) {
            payload.qty--;
            setItems({
                ...items,
                cart: [...items.cart],
            });
        } else {
            removeFromCart(payload, indexValue);
        }
    };

    const removeFromCart = (payload, indexValue) => {
        setItems({
            ...items,
            cart: items.cart.filter(
                (items, index) => items.id !== payload && index !== indexValue,
            ),
        });
    };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty;
    const sum = items.cart.reduce(reducer, 0);
    return sum.toFixed(2);
  };

    return {
        items,
        addToCart,
        reduceItem,
        removeFromCart,
        getAllProducts,
        currentProducts,
        totalCartItems,
        checkout,
        setCheckout,
        openCart,
        setOpenCart,
    productList,
    setProductList,
    disableButton,
    setDisableButton,
    sumTotal
  };
};

export default useInitialState;
