import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

 
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.trips);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [url]);
  return [data, isLoading, error];
}
