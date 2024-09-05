import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddItem from "../../components/template/AddItem";
import { addNewRole } from "../../services/role-service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddRole = () => {
  const [roleName, setRoleName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewRole({ role: roleName });
      message.success("Role added successfully!");
      setRoleName("");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to add Role. Please try again.");
      console.error("Error adding Role:", error);
    }
  };

  return (
    <>
      <Header />
      <AddItem
        item={"Role"}
        inputName={"title"}
        labelName={"Role"}
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default AddRole;
