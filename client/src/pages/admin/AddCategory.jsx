import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddItem from "../../components/template/AddItem";
import { addNewCategory } from "../../services/category-service"; 
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = await addNewCategory({ title: categoryName }); 
      message.success("Category added successfully!"); 
      setCategoryName(""); 
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to add category. Please try again.");
      console.error("Error adding category:", error);
    }
  };

  return (
    <>
      <Header />
      <AddItem
        item={"Category"}
        inputName={"title"}
        labelName={"Category"}
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        onSubmit={handleSubmit} 
      />
      <Footer />
    </>
  );
};

export default AddCategory;
