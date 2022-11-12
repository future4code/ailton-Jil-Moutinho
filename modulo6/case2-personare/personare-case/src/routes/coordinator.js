  export const goToRegister = (navigate) => {
    navigate("/");
  };

  export const goDraw = (navigate) => {
    navigate("/draw");
  };

  export const goToResult = (navigate) => {
    navigate("/result");
  };
  
  export const goBack = (navigate) => {
    navigate(-1);
  };

  export const goToTop = () => {
    window.scroll(0, 0);
  };