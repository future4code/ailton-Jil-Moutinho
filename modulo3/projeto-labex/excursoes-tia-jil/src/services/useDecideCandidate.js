import axios from "axios";
import { useEffect } from "react";
/* import { useRequestDetails } from "./useRequestDetails"; */

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
        window.alert('Candidato registrado como aprovado!');
        /* useRequestDetails(); */
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  
};