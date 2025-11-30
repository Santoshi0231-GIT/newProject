// import React, { useState } from "react";
// import Dashboard from "../../Pages/Dashboard/Dashboard";

// export default function Doctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const initialForm = {
//     name: "",
//     education: "",
//     specialization: "",
//     email: "",
//     phone: "",
//     address: "",
//     experience: "",
//     profileImageFile: null,
//     profileImageUrl: "",
//     gender: "",
//     department: "",
//     shift: "",
//     fees: "",
//   };

//   const [formData, setFormData] = useState(initialForm);
//   const [errors, setErrors] = useState({});

//   const educationOptions = ["MBBS", "MD", "MS", "BDS", "MCh", "DM", "Diploma"];
//   const specializationOptions = [
//     "Cardiologist",
//     "Neurologist",
//     "Orthopedic",
//     "Dermatologist",
//     "Pediatrician",
//     "Psychiatrist",
//     "General Physician",
//   ];
//   const departmentOptions = [
//     "Cardiology",
//     "Neurology",
//     "Orthopedics",
//     "Dermatology",
//     "Pediatrics",
//     "Psychiatry",
//     "ENT",
//     "Radiology",
//     "Oncology",
//   ];
//   const genderOptions = ["Male", "Female", "Other"];
//   const shiftOptions = ["Morning", "Afternoon", "Evening", "Full Time", "On Call"];
//   const feesOptions = ["RS.500", "RS.700", "RS.700", "RS.1000", "RS.30000", "RS.50000", "RS.10000"];
//   const experienceOptions = Array.from({ length: 30 }, (_, i) => `${i + 1}`);

//   const openModal = () => {
//     setShowModal(true);
//     setErrors({});
//   };

//   const closeModal = () => {
//     if (formData.profileImageUrl) URL.revokeObjectURL(formData.profileImageUrl);
//     setFormData(initialForm);
//     setShowModal(false);
//     setErrors({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (formData.profileImageUrl) URL.revokeObjectURL(formData.profileImageUrl);

//     setFormData((prev) => ({
//       ...prev,
//       profileImageFile: file,
//       profileImageUrl: URL.createObjectURL(file),
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Doctor name is required.";
//     if (!formData.education.trim()) newErrors.education = "Select education.";
//     if (!formData.specialization.trim()) newErrors.specialization = "Select specialization.";
//     if (!formData.email.trim()) newErrors.email = "Email is required.";
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter valid email.";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
//     else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";
//     if (!formData.gender) newErrors.gender = "Select gender.";
//     if (!formData.department) newErrors.department = "Select department.";
//     if (!formData.experience) newErrors.experience = "Select experience.";
//     if (!formData.shift) newErrors.shift = "Select shift.";
//     if (!formData.fees) newErrors.fees = "Select consultation fees.";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       const newDoctor = { ...formData, id: Date.now().toString(), _revokable: !!formData.profileImageUrl };
//       setDoctors((prev) => [newDoctor, ...prev]);
//       closeModal();
//     }
//   };

//   const handleDelete = (id) => {
//     const doc = doctors.find((d) => d.id === id);
//     if (doc?.profileImageUrl && doc._revokable) URL.revokeObjectURL(doc.profileImageUrl);
//     setDoctors((prev) => prev.filter((d) => d.id !== id));
//   };
  
//   return (
    
//       <div className="p-4 sm:p-6">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
//           <h1 className="text-xl  text-gray-100 font-semibold">Doctor Directory</h1>
//           <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             Add Doctor
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto bg-white rounded-lg shadow">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-2 border">Profile</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Specialization</th>
//                 <th className="p-2 border">Email</th>
//                 <th className="p-2 border">Phone</th>
//                 <th className="p-2 border hidden sm:table-cell">Experience</th>
//                 <th className="p-2 border hidden md:table-cell">Education</th>
//                 <th className="p-2 border hidden lg:table-cell">Department</th>
//                 <th className="p-2 border hidden lg:table-cell">Address</th>
//                 <th className="p-2 border">Fees</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {doctors.length === 0 ? (
//                 <tr>
//                   <td colSpan="11" className="p-4 text-center text-gray-500">
//                     No doctors added yet.
//                   </td>
//                 </tr>
//               ) : (
//                 doctors.map((doc) => (
//                   <tr key={doc.id} className="odd:bg-white even:bg-gray-50">
//                     <td className="p-2 border">
//                       {doc.profileImageUrl ? (
//                         <img src={doc.profileImageUrl} alt={doc.name} className="w-12 h-12 rounded-full object-cover" />
//                       ) : (
//                         <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">No Img</div>
//                       )}
//                     </td>
//                     <td className="p-2 border">{doc.name}</td>
//                     <td className="p-2 border">{doc.specialization}</td>
//                     <td className="p-2 border">{doc.email}</td>
//                     <td className="p-2 border">{doc.phone}</td>
//                     <td className="p-2 border hidden sm:table-cell">{doc.experience} yrs</td>
//                     <td className="p-2 border hidden md:table-cell">{doc.education}</td>
//                     <td className="p-2 border hidden lg:table-cell">{doc.department}</td>
//                     <td className="p-2 border hidden lg:table-cell">{doc.address}</td>
//                     <td className="p-2 border">{doc.fees}</td>
//                     <td className="p-2 border">
//                       <button
//                         onClick={() => handleDelete(doc.id)}
//                         className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-500"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-100 bg-opacity-50 p-4">
//             <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-auto max-h-[90vh] p-6">
//               <div className="flex items-start justify-between">
//                 <h2 className="text-2xl font-bold flex items-center">Add Doctor</h2>
//                 <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">✕</button>
//               </div>

//               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                 {/* Name */}
//                 <div className="md:col-span-2">
//                   <label className="block font-medium mb-1">Name</label>
//                   <input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.name ? "border-blue-600" : "border-gray-300"}`}
//                     placeholder="Dr. John Doe"
//                   />
//                   {errors.name && <p className="text-blue-600 text-sm mt-1">{errors.name}</p>}
//                 </div>

//                 {/* Profile Image */}
//                 <div>
//                   <label className="block font-medium mb-1">Profile Image</label>
//                   <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
//                   {formData.profileImageUrl && (
//                     <img src={formData.profileImageUrl} alt="preview" className="mt-2 w-28 h-28 rounded-md object-cover border" />
//                   )}
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label className="block font-medium mb-1">Gender</label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.gender ? "border-red-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Gender</option>
//                     {genderOptions.map((g) => <option key={g} value={g}>{g}</option>)}
//                   </select>
//                   {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender}</p>}
//                 </div>

//                 {/* Education */}
//                 <div>
//                   <label className="block font-medium mb-1">Education</label>
//                   <select
//                     name="education"
//                     value={formData.education}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.education ? "border-red-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Education</option>
//                     {educationOptions.map((ed) => <option key={ed} value={ed}>{ed}</option>)}
//                   </select>
//                   {errors.education && <p className="text-blue-600 text-sm mt-1">{errors.education}</p>}
//                 </div>

//                 {/* Specialization */}
//                 <div>
//                   <label className="block font-medium mb-1">Specialization</label>
//                   <select
//                     name="specialization"
//                     value={formData.specialization}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.specialization ? "border-red-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Specialization</option>
//                     {specializationOptions.map((s) => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                   {errors.specialization && <p className="text-blue-600 text-sm mt-1">{errors.specialization}</p>}
//                 </div>

//                 {/* Department */}
//                 <div>
//                   <label className="block font-medium mb-1">Department</label>
//                   <select
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.department ? "border-blue-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Department</option>
//                     {departmentOptions.map((d) => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                   {errors.department && <p className="text-blue-600 text-sm mt-1">{errors.department}</p>}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block font-medium mb-1">Email</label>
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.email ? "border-blue-600" : "border-gray-300"}`}
//                     placeholder="name@example.com"
//                   />
//                   {errors.email && <p className="text-blue-600 text-sm mt-1">{errors.email}</p>}
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block font-medium mb-1">Phone</label>
//                   <input
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.phone ? "border-blue-600" : "border-gray-300"}`}
//                     placeholder="10 digit phone"
//                   />
//                   {errors.phone && <p className="text-blue-600 text-sm mt-1">{errors.phone}</p>}
//                 </div>

//                 {/* Experience */}
//                 <div>
//                   <label className="block font-medium mb-1">Experience (years)</label>
//                   <select
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.experience ? "border-red-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Experience</option>
//                     {experienceOptions.map((y) => <option key={y} value={y}>{y}</option>)}
//                   </select>
//                   {errors.experience && <p className="text-blue-600 text-sm mt-1">{errors.experience}</p>}
//                 </div>

//                 {/* Fees */}
//                 <div>
//                   <label className="block font-medium mb-1">Consultation Fees</label>
//                   <select
//                     name="fees"
//                     value={formData.fees}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.fees ? "border-blue-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Fees</option>
//                     {feesOptions.map((f) => <option key={f} value={f}>{f}</option>)}
//                   </select>
//                   {errors.fees && <p className="text-blue-600 text-sm mt-1">{errors.fees}</p>}
//                 </div>

//                 {/* Address */}
//                 <div className="md:col-span-2">
//                   <label className="block font-medium mb-1">Clinic Address</label>
//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full border rounded-lg px-3 py-2 h-24 border-gray-300"
//                   />
//                 </div>

//                 {/* Shift */}
//                 <div>
//                   <label className="block font-medium mb-1">Shift / Availability</label>
//                   <select
//                     name="shift"
//                     value={formData.shift}
//                     onChange={handleChange}
//                     className={`w-full border rounded-lg px-3 py-2 ${errors.shift ? "border-red-600" : "border-gray-300"}`}
//                   >
//                     <option value="">Select Shift</option>
//                     {shiftOptions.map((s) => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                   {errors.shift && <p className="text-blue-600 text-sm mt-1">{errors.shift}</p>}
//                 </div>

//                 {/* Buttons */}
//                 <div className="md:col-span-2 flex justify-end gap-3 mt-2">
//                   <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Cancel</button>
//                   <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Add Doctor</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
    
//   );
// }


import React, { useEffect, useState } from "react";

import { deleteDoctor, getDoctorsName } from "../../context/api/AxiosServices";
import { addDoctor } from "../../context/api/apiDoctor";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for API errors

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    phone_no: "",
    education: "",
    profile: "",
    remarks: "",
  });


  async function fetchDoctors() {
    setLoading(true);
    setError(null);
    try {
      const response = await getDoctorsName();
      
  
      const data = response?.data?.doctor; 
      
      console.log("Fetched doctors:", data);
      
 
      setDoctors(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching doctors:", err);
      setError("Failed to load doctor data. Please check the API connection.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- ADD DOCTOR ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDoctor(formData);
      
      
      const newDoctor = response?.data?.doctor || response?.data; 
      
      if (!newDoctor || !newDoctor.id) {
          throw new Error("API did not return a valid doctor object with an ID.");
      }

      console.log("Saved Doctor Data:", newDoctor);
      
      // Update the list with the newly created doctor
      setDoctors([...doctors, newDoctor]);

      // Clear the form and close the modal
      setFormData({
        name: "",
        specialization: "",
        email: "",
        phone_no: "",
        education: "",
        profile: "",
        remarks: "",
      });
      setShowForm(false); 
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      console.error("Error saving doctor:", message);
      alert(`Failed to save doctor! Reason: ${message}`);
    }
  };
  

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor? This action cannot be undone.")) {
        return;
    }
    
    try {
      console.log("Deleting doctor with ID:", id);
      await deleteDoctor(id);

     
      setDoctors(doctors.filter((d) => d.id !== id));
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      console.error("Delete failed:", message);
      alert(`Delete failed: ${message}. Check token or permissions.`);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">🏥 Doctors Management</h2>

      {/* Loading & Error States */}
      {loading && <p className="text-center text-blue-500 col-span-full">Loading Doctors...</p>}
      {error && <p className="text-center text-red-600 col-span-full font-bold">{error}</p>}


      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700 transition"
      >
        ➕ Add New Doctor
      </button>

      {/* Doctors Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              // Use doctor.id as the key for stable rendering
              <div
                key={doctor.id} 
                className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>

                <p className="text-gray-600">
                  <strong>Specialization:</strong> {doctor.specialization}
                </p>

                <p className="text-gray-600">
                  <strong>Email:</strong> {doctor.email}
                </p>

                <p className="text-gray-600">
                  <strong>Contact:</strong> {doctor.phone_no}
                </p>

                <p className="text-gray-600">
                  <strong>Education:</strong> {doctor.education}
                </p>

                <p className="text-gray-600">
                  <strong>Profile:</strong> {doctor.profile}
                </p>

                <p className="text-gray-600">
                  <strong>Remarks:</strong> {doctor.remarks}
                </p>

                <button
          
                  onClick={() => handleDelete(doctor.id)} 
                  className="mt-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-150"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No doctor records found.
            </p>
          )}
        </div>
      )}


      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Add New Doctor</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Doctor Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} className="w-full border p-2 rounded" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
              <input type="text" name="phone_no" placeholder="Contact Number" value={formData.phone_no} onChange={handleChange} className="w-full border p-2 rounded" required />
              <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="w-full border p-2 rounded" required />
              <input type="text" name="profile" placeholder="Profile" value={formData.profile} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="text" name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange} className="w-full border p-2 rounded" />
              
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;