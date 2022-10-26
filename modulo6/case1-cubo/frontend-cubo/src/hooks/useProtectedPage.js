import { useEffect } from "react";
import { useNavigate } from "react-router";
import { goToLogin } from "../routes/coordinator";
import { token } from "../constants/token";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      goToLogin(navigate);
    }
  }, []);
};
