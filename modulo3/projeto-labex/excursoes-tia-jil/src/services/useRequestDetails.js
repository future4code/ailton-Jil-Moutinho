import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestDetails = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
 
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    axios
      .get(url, 
        {headers: {
            auth: token,
        }})
      .then((res) => {
        setIsLoading(false);
        setData(res);
        console.log(res)
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [url]);
  return [data, isLoading, error];
};