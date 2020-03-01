import { useState, useEffect } from "react";

const apiUrl = "http://media.mw.metropolia.fi/wbma/";

const fetchPost = async (endpoint = "", data = {}, token = '') => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  const response = await fetch(apiUrl + endpoint, fetchOptions);
  const json = await response.json();
  console.log(json);
  if (response.status === 400 || response.status === 401) {
    throw new Error(Object.values(json).join());
  } else if (resonponse.status > 299) {
    throw new Error("fetchPost Error" + response.status);
  }

  return json;
};

const fetchGet = async (endpoint = "", params = "", token = "") => {
  const fetchOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  const response = await fetch(apiUrl + endpoint + '/' + params, fetchOptions);
  if (!response.ok) {
    throw new Error('fetch-get error' + response.status);
  }
  return await response.json();
}

const getAllMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    try {
      const response = await fetch(apiUrl + "media/all");
      const json = await response.json();

      const result = await Promise.all(
        json.files.map(async item => {
          const tnresponse = await fetch(apiUrl + "media/" + item.file_id);
          return await tnresponse.json();
        })
      );

      console.log("apihooks", result);

      setData(result);
      setLoading(false);
    } catch (e) {
      console.log("error", e.message);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};
export { getAllMedia, fetchPost, fetchGet };
