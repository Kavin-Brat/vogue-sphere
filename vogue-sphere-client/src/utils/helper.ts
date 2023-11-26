// Authenticate User
export const AuthenticateUser = () => {
  const auth: string | null = localStorage.getItem("lin");
  if (auth && auth != null && auth != "") {
    return true;
  } else {
    return false;
  }
};
