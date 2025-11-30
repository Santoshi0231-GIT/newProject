import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "https://appoinment-system-backend-1.onrender.com/user";

// 1️⃣ GET all patients
export const getPatients = async () => {
  try {
    const token = Cookies.get("token");

    const response = await axios.get(`${API_BASE}/get`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });


    const allUsers = response.data.data || [];
    return allUsers;

  } catch (error) {
    console.error("getPatients error:", error.response || error);
    throw error;
  }
};

// 2️⃣ Create a new patient
export const createPatient = async (data) => {
  try {
    const token = Cookies.get("token");

    const payload = {
      ...data,
      role: "users"
    };

    const response = await axios.post(`${API_BASE}/register`, payload, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    console.log(response);
    return response.data;


  } catch (error) {
    console.error("createPatient error:", error.response || error);
    throw error;
  }
};

// 3️⃣ Update patient
export const updatePatientById = async (id, data) => {
  try {
    const token = Cookies.get("token");

    const response = await axios.put(`${API_BASE}/update/${id}`, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

    return response.data;

  } catch (error) {
    console.error("updatePatient error:", error.response || error);
    throw error;
  }
};

// 4️⃣ Delete patient
export const deletePatientById = async (id) => {
  try {
    const token = Cookies.get("token");

    const response = await axios.delete(`${API_BASE}/delete/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

    return response.data;

  } catch (error) {
    console.error("deletePatient error:", error.response || error);
    throw error;
  }
};
