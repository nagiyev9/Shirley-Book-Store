import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddItem from "../../components/template/AddItem";
import { addNewType } from "../../services/type-service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddType = () => {
  const [typeName, setTypeName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewType({ title: typeName });
      message.success("Type added successfully!");
      setTypeName("");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to add Type. Please try again.");
      console.error("Error adding Type:", error);
    }
  };

  return (
    <>
      <Header />
      <AddItem
        item={"Type"}
        inputName={"title"}
        labelName={"Type"}
        value={typeName}
        onChange={(e) => setTypeName(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default AddType;
