import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddItem from "../../components/template/AddItem";
import { addNewProductTag } from "../../services/product-tag-service"; 
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddProductTag = () => {
  const [tagName, setTagName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addNewProductTag({ title: tagName });
      if (response.status === 200) {
        message.success(response.message);
        setTagName("");
      }
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to add Product Tag. Please try again.");
      console.error("Error adding Product Tag:", error);
    }
  };

  return (
    <>
      <Header />
      <AddItem
        item={"Product Tag"}
        inputName={"title"}
        labelName={"Tag"}
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default AddProductTag;
