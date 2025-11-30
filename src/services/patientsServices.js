import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "https://appoinment-system-backend-1.onrender.com/user";

// 1️⃣ GET all patients
export const getPatients = async () => {
  try {
    const token = Cookies.get("token");

    console.log("GET request to:", `${API_BASE}/getAll`, "Token:", token);

    const response = await axios.get(`${API_BASE}/getAll`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

    // Filter only role = patient
    const allUsers = response.data.data || [];
    const patients = allUsers.filter(u => u.role === "patient");

    console.log("Filtered Patients:", patients);
    return patients;

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
      role: "patient"
    };

    console.log("POST to:", `${API_BASE}/createUser`, payload);

    const response = await axios.post(`${API_BASE}/createUser`, payload, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

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

    const response = await axios.put(`${API_BASE}/${id}`, data, {
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

    const response = await axios.delete(`${API_BASE}/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

    return response.data;

  } catch (error) {
    console.error("deletePatient error:", error.response || error);
    throw error;
  }
};
