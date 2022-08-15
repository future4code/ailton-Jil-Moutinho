export const goToTripsList = (navigate) => {
  navigate("/");
};
export const goToApplication = (navigate) => {
  navigate("/application/");
};
export const goToLogin = (navigate) => {
  navigate("/login/");
};
export const goToManagement = (navigate) => {
  navigate("/management/");
};
export const goToTripDetails = (navigate, id) => {
  navigate(`/management/tripdetails/${id}`);
};
export const goToCreatetrip = (navigate) => {
  navigate("/management/createtrip/");
};
export const goBack = (navigate) => {
  navigate(-1);
};
