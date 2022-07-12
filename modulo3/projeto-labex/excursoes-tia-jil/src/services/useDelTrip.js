import axios from "axios";
import { useEffect } from "react";

export const useDelTrips = (url) => {

    axios
      .delete(url)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
};
