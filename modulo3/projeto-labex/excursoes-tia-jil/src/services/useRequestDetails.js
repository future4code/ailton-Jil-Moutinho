import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestDetails = (url) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const getDetails = (url) => {
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setData(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails(url);
  }, [url]);
  return [data, getDetails];
};
