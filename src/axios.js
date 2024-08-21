import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Fonction pour se connecter
export const Login = async (credentials) => {
  try {
    const response = await apiClient.post("/data", credentials);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données:", error);
    throw error;
  }
};



export default apiClient;