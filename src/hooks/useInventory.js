import { useEffect, useState } from "react";


const useInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-wildwood-46157.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default useInventory;