import { useEffect } from "react";
import { useNavigate } from "react-router";
import { goToLogin } from "../routes/Coordinators";
import { token } from "../constants/token";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};
