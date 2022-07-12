import axios from "axios";
import { useEffect, useState } from "react";

export const usePostData = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(url, body)
      .then((res) => {
        setIsLoading(false);
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [url]);
  return [data, isLoading, error];
};
