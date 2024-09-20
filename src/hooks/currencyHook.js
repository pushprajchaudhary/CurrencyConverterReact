import {useEffect, useState} from 'react';

function useCurrencyConverter(currency) {
    const [data, setData] = useState([]);
 
    useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then(jsonRes => setData(jsonRes[currency]));
    }, [currency]);
    console.log('data', data);
    return data;
}

export default useCurrencyConverter;