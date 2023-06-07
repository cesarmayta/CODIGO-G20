import { API_URL } from "../lib/Enviroments";

export const signIn = async (user) => {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  const status = response.status;
  return { data, status };
};

export const signUp = async (user) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const isAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  const payload = token.split(".")[1];
  const jsonPayload = JSON.parse(window.atob(payload));
  if (jsonPayload.exp > new Date() / 1000) {
    return true;
  }
  return false;
};

export const signOut = () => {
  window.localStorage.removeItem("token");
  return (window.location.href = "/");
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
};
