import React, { useState } from "react";

export default function Doctors(
  
) {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    education:"",
    specialization: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const openModal = () => {
    setShowModal(true);
    setErrors({});
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      specialization: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.specialization.trim())
      newErrors.specialization = "Specialization required";

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setDoctors([...doctors, formData]);
      closeModal();
    }
  };

  return (
    <div className="p-6">

      {/* Header + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Doctors</h1>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Specialization</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Education</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No doctors added yet.
                </td>
              </tr>
            ) : (
              doctors.map((doc, idx) => (
                <tr key={idx} className="border">
                  <td className="p-2 border">{doc.name}</td>
                  <td className="p-2 border">{doc.specialization}</td>
                  <td className="p-2 border">{doc.email}</td>
                  <td className="p-2 border">{doc.phone}</td>
                  <td className="p-2 border">{doc.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg relative">

            <h2 className="text-xl font-semibold mb-4">Add Doctor</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.name && "border-blue-600"
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-blue-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Specialization */}
              <div>
                <label className="block font-medium mb-1">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.specialization && "border-blue-600"
                  }`}
                  value={formData.specialization}
                  onChange={handleChange}
                />
                {errors.specialization && (
                  <p className="text-blue-600 text-sm">{errors.specialization}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.email && "border-blue-600"
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-blue-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.phone && "border-blue-600"
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-blue-600 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  className="w-full border rounded-lg px-3 py-2 h-20"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Education</label>
                <input 
                  type="text"
                  name="education"
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.education && "border-blue-600"
                  }`}
                  value={formData.education}
                  onChange={handleChange}
                />
                {errors.education && (
                  <p className="text-blue-600 text-sm">{errors.education}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}