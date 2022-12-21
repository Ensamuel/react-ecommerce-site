import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch(url);
        if (componentMounted) {
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
          console.log(filter);
        }
        return () => {
          componentMounted = false;
        };
      };
      getProducts();
    }, [url]);

    return {data, loading, filter, setFilter}
}

export default UseFetch