// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import { addDoctor } from "../../services/DoctorService";
// const initialForm = {
//   name: "",
//   education: "",
//   specialization: "",
//   phone_no: "",
//   email: "",
//   profile: "",
//   remarks: ""
// };

// const DoctorForm = () => {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const validate = (data) => {
//     if (!data.name.trim()) return "Name is required";
//     if (!data.specialization.trim()) return "Specialization is required";
//     if (!data.email.trim()) return "Email is required";
//     if (!data.phone_no.trim()) return "Phone number is required";
//     if (!data.education.trim()) return "Education is required";
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     const v = validate(form);
//     if (v) {
//       setError(v);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await addDoctor(form);
//       setSuccess("Doctor added successfully!");
//       setForm(initialForm);

//       setTimeout(() => navigate("/doctors"), 700);
//     } catch (err) {
//       setError(err?.message || "Failed to add doctor");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-[480px]"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Add Doctor
//         </h2>

//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//         {success && <p className="text-green-600 text-center mb-4">{success}</p>}

//         {/* Name */}
//         <label className="block mb-1">Full Name *</label>
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="Dr. Jane Smith"
//         />

//         {/* Education */}
//         <label className="block mb-1">Education *</label>
//         <input
//           name="education"
//           value={form.education}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="MBBS, MD"
//         />

//         {/* Specialization */}
//         <label className="block mb-1">Specialization *</label>
//         <input
//           name="specialization"
//           value={form.specialization}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="Cardiologist"
//         />

//         {/* Phone */}
//         <label className="block mb-1">Phone Number *</label>
//         <input
//           name="phone_no"
//           value={form.phone_no}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="+977-98XXXXXXX"
//         />

//         {/* Email */}
//         <label className="block mb-1">Email *</label>
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           type="email"
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="doctor@mail.com"
//         />

//         {/* Profile (image) */}
//         <label className="block mb-1">Profile Image URL</label>
//         <input
//           name="profile"
//           value={form.profile}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded-lg"
//           placeholder="https://image-url"
//         />

//         {/* Remarks */}
//         <label className="block mb-1">Remarks</label>
//         <input
//           name="remarks"
//           value={form.remarks}
//           onChange={handleChange}
//           className="w-full p-2 mb-6 border rounded-lg"
//           placeholder="Additional notes"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 rounded-lg text-white font-medium ${
//             loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Adding..." : "Add Doctor"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DoctorForm;
import React from 'react'

const DoctorForm = () => {
  return (
    <div>DoctorForm</div>
  )
}

export default DoctorForm