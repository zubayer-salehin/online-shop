import { useEffect, useState } from 'react';

const useProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/product/get ")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return [products]
};

export default useProduct;