import { useState, useEffect } from 'react';

export const useFetch = (url, headers) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url, headers);
            const json = await res.json();
            if (url.includes('trending')) {
                setData(json.finance.result[0].quotes);
            } else {
                setData(json)
            }
        }

        fetchData()
    }, [url, headers])

    return {data}

}