import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { getDoctors } from "../../services/DoctorService";

const Doctor = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      const res = await getDoctors();
      console.log("Fetched doctors:", res);

      if (Array.isArray(res?.doctors)) {
        setDoctors(res.doctors);
      } else if (Array.isArray(res)) {
        setDoctors(res);
      } else {
        setDoctors([]);
      }
    } catch (err) {
      console.error("Failed to load doctors:", err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-2xl font-semibold">Doctors</h2>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
            onClick={() => navigate("/add-doctor")}
          >
            <FaPlus /> Add Doctor
          </button>
        </div>

        <table className="w-full text-left bg-white shadow rounded-xl">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Doctor</th>
              <th className="p-3">Education</th>
              <th className="p-3">Specialization</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>

          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No doctors found
                </td>
              </tr>
            ) : (
              doctors.map((doc, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={doc.profile || "https://via.placeholder.com/40"}
                      className="w-10 h-10 rounded-full"
                    />
                    {doc.name}
                  </td>

                  <td className="p-3">{doc.education}</td>
                  <td className="p-3">{doc.specialization}</td>
                  <td className="p-3">{doc.phone_no}</td>
                  <td className="p-3">{doc.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
