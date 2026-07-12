import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API
});

export const analyzeCompany = async (company) => {
    const response = await API.post("/analyze", { company });
    return response.data;
};

export default API;