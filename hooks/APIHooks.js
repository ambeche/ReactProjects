import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() => {
    try {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
    }catch(e){
      console.log('error', e.message);

    }
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };
