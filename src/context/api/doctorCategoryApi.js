import axios from "axios";
import Cookies from "js-cookie";


const BASE_URL = "https://appoinment-system-backend-1.onrender.com";


const TOKEN = Cookies.get('token')
console.log(TOKEN)

export const getAllDoctorCategories = async () => {
  return axios.get(`${BASE_URL}/categoryDoctor/getall`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
};


export const createDoctorCategory = async (category) => {
  return axios.post(`${BASE_URL}/categoryDoctor/create`, category, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
};

export const deleteDoctorCategory = async (id) => {
  return axios.delete(`${BASE_URL}/categoryDoctor/delete/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
};
