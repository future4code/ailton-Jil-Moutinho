import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToManagement } from "../../router/Coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não esta logado");
      window.alert("Você não esta logado");
      goToLogin(navigate);
    }
  }, []);
};

export const useLoginDone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("user");
    if (token !== null) {
      window.alert(`Ola ${email}! Você já esta logado`);
      goToManagement(navigate);
    }
  }, []);
};
