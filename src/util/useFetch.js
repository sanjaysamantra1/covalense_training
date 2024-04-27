import React, { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }, []);

    return data;
}