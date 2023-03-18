import { useEffect, useState } from 'react';

function Price() {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        async function getPrice() {
            const response = await fetch('/api/otto');
            const { price } = await response.json();
            setPrice(price);
        }
        getPrice();
    }, []);

    if (price === null) {
        return <div>Loading price...</div>;
    } else {
        return <div>Price: {price}</div>;
    }
}

export default Price;