import axios from "axios";

export const useDelTrips = (url) => {

    axios
      .delete(url)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
};
