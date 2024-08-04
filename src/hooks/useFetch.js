import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const params = {
      params: { language: "en-US" },
      api_key: "a4235cfcff6946cc81f3ca1da1ed5af7",
    };
    if (endpoint === "/search/movie" && !query) {
      return;
    } else if (endpoint === "/search/movie" && query) {
      params.query = query;
    }
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios(endpoint, { params });
        setData(data);
        console.log("endpoint:", endpoint, data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint, query]);
  return { data, loading, error };
};
