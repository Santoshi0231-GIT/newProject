import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const HospitalCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "General Hospital", description: "Provides general medical services." },
    { id: 2, name: "Specialty Hospital", description: "Hospitals with specialized departments like cardiology, neurology, etc." },
  ]);

  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.description) return;
    const id = categories.length + 1;
    setCategories([...categories, { id, ...newCategory }]);
    setNewCategory({ name: "", description: "" });
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Hospital Categories</h1>

      {/* Add Category Form */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Category Name"
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <button
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleAddCategory}
        >
          <FaPlus /> Add Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className=" text-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{cat.id}</td>
                <td className="px-4 py-2 font-medium">{cat.name}</td>
                <td className="px-4 py-2">{cat.description}</td>
                <td className="px-4 py-2 text-center flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(cat.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center px-4 py-6 text-gray-500">
                  No categories added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalCategories;
