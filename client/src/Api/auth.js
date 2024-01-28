import axios from "./axiosSetup";

export const registerRequest = (user) => axios.post(`/register`, user);
export const loginRequest = async (user) => {
  try {
    const response = await axios.post('/login', user);
    console.log("login request");
    return response.data;
  } catch (error) {
    console.error("Error en loginRequest:", error);
    throw error;
  }
};

export const verifyTokenRequest = () => axios.get("/verify");
