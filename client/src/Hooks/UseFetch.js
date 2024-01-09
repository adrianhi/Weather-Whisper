import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};
export default UseFetch;
