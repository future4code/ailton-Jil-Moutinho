import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants/constants";

const useCreateTrip = (event) => {
  event.preventDefault();

/*   const body = {name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",}; */

  const token = localStorage.getItem("token");

  axios
    .put(`${BASE_URL}/trips`, form, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      window.alert("Candidato registrado como aprovado!");
      /* useRequestDetails(); */
      cleanFields();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useCreateTrip;
