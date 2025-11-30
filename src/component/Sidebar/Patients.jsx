import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getPatients } from "../../services/patientsServices";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");
const navigate = useNavigate();
  const fetchPatients = async () => {
    const token = Cookies.get("token");
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      const res = await getPatients(); 
      setPatients(res.data.data || []);
      setError("");
    } catch (err) {
      console.log(err);
      if (err.response?.status === 401) setError("Session expired. Please log in again.");
      else setError("Something went wrong while fetching patients.");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="p-6 "><div className="flex justify-between">
      <h1 className="text-2xl font-semibold mb-4">Patients</h1>
      <button
  onClick={() => navigate("/add-patient")}
  className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
>
  + Add Patient
</button></div>
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-3">No Patients Found</td>
            </tr>
          ) : (
            patients.map((p) => (
              <tr key={p.id}>
                <td className="p-2 border">{p.userName}</td>
                <td className="p-2 border">{p.email}</td>
                <td className="p-2 border">{p.contactNumber}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
