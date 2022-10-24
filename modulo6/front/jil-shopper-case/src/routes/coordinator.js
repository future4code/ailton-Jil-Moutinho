export const goSentCart = (navigate) => {
  navigate("/send");
  window.location.reload();
};
export const goHome = (navigate) => {
  navigate("/");
  window.location.reload();
};
export const goBack = (navigate) => {
  navigate(-1);
};
