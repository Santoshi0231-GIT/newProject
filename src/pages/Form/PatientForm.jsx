import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    contactNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ⭐ Auto-generate password (backend requires this)
  const generatePassword = () => {
    return "patient" + Math.floor(1000 + Math.random() * 9000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const payload = {
      ...formData,
      password: generatePassword(), 
    };

    try {
      const response = await fetch(
        "https://appoinment-system-backend-1.onrender.com/user/addUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("Add patient response:", result);

      if (response.ok) {
        alert("Patient added successfully!");
        navigate("/patients");
      } else {
        alert(result.message || "Failed to add patient");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        Add New Patient
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="userName"
          placeholder="Full Name"
          value={formData.userName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="contactNumber"
          placeholder="Phone Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <input
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
