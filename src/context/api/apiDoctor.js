import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL;

function getToken() {
  return localStorage.getItem("token");
}

export async function addDoctor(data) {
  const token = getToken();

  const res = await axios.post(`${BASE}/doctor/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return res.data.payload?.doctor || data;
}
