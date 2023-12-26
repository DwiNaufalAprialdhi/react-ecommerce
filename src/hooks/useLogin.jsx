/* eslint-disable no-unused-vars */
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(jwtDecode(token));
    } else {
      window.location.href = "/login";
    }
  }, []);
  return token;
};
