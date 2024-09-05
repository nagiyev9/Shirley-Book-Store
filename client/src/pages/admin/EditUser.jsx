import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { getAllUsers, updateUser } from "../../services/user-service";
import { getAllRoles } from "../../services/role-service";
import { message } from "antd";

const EditUser = ({ item }) => {
  const { slug } = useParams();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: { _id: "", role: "" },
  });
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getAllUsers(); // Adjust this to get a single user by slug if necessary
        setData(userData[0]); // Assuming you need the first user; adjust logic as needed
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchUserData();
    fetchRoles();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const selectedRole = roles.find((role) => role._id === e.target.value);
    setData((prevData) => ({
      ...prevData,
      role: selectedRole,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(slug, { ...data, role: data.role._id });
      message.success("User updated successfully!");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to update user.");
      console.error("Failed to update user:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Edit User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.firstName}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full px-4 bg-gray-300 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.lastName}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.email}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Role:
            </label>
            <select
              name="role"
              id="role"
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.role._id}
              onChange={handleRoleChange}
            >
              {roles.map((role) => (
                <option key={role._id} value={role._id} selected={data?.role?.role === role.role}>
                  {role.role}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#62ab00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition duration-300"
          >
            Edit {item}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditUser;
