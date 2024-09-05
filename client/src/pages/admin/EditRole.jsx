import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { getRoleBySlug, editRole } from "../../services/role-service";
import { message } from "antd";

const EditRole = () => {
  const { slug } = useParams();
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRoleBySlug(slug);
        const roleName = response[0]?.role; 
        setData(roleName);
        setInputValue(roleName); 
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };

    fetchData();
  }, [slug]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editRole(slug, { role: inputValue }); 
      message.success("Role updated successfully!");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to edit role.");
      console.error("Failed to edit role:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Edit Role
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="role"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Role Name:
            </label>
            <input
              type="text"
              name="role"
              id="role"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Role name"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#62ab00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition duration-300"
          >
            Edit Role
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditRole;
