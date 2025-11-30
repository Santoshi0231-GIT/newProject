import React, { useEffect, useState } from "react";

import { getAllDoctorCategories,createDoctorCategory,deleteDoctorCategory } from "../context/api/doctorCategoryApi";

const DoctorCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  // Fetch categories on page load
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getAllDoctorCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategory.name || !newCategory.description) return;

    try {
      await createDoctorCategory(newCategory);
      setNewCategory({ name: "", description: "" });
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await deleteDoctorCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Doctor Categories</h1>

      {/* Create Category Form */}
      <div className="flex mb-6 space-x-2">
        <input
          type="text"
          placeholder="Category Name"
          className="border p-2 rounded flex-1"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 rounded flex-1"
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
        <button
          onClick={handleCreateCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

   <div className="bg-white shadow p-4 rounded-xl border-b">
     
      <table className="w-full border-collapse border">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td className="border px-4 py-2">{cat.name}</td>
              <td className="border px-4 py-2">{cat.description}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteCategory(cat.id)}
                  className="text-blue-400 hover:text-blue-700 p-1 text-xl"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table></div>
    </div>
  );
};

export default DoctorCategoryPage;
