import axios from "axios";
import { useEffect, useState } from "react";

export const useDecideCandidate = (url) => {
 
  useEffect(() => {

    const body = {
        approve: true,
    };
    const token = localStorage.getItem('token');

    axios
      .put(url, body,
        {headers: {
            auth: token,
        }})
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return [data];
};