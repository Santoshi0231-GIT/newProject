import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getDoctorsName = () => {
  return api.get("/doctor/show");
};
export const deleteDoctor = (id) => {
  const token = localStorage.getItem("token");

  return api.delete(`/doctor/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
