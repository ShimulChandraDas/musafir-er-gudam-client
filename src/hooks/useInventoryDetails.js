import React, { useEffect, useState } from 'react';

const useInventoryDetails = inventoryId => {
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId])
    return [inventory]
}
export default useInventoryDetails;