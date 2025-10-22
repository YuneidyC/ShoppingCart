import { useEffect, useState } from 'react';

const serverUrl = 'https://fakestoreapi.com/products';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
          fetch(serverUrl)
          .then((response) => response.json())
          .then((data) => setProducts(data))
  }, []);

  return products;
};

export default useGetProducts;
