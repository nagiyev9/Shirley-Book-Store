import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddItem from "../../components/template/AddItem";
import { addNewBlogTag } from "../../services/blog-tag-service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddBlogTag = () => {
  const [tagName, setTagName] = useState("");
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTag = await addNewBlogTag({ title: tagName });
      message.success("Added new tag");
      setTagName("");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Error adding new tag:", error);
    }
  };

  return (
    <>
      <Header />
      <AddItem
        item={"Blog Tag"}
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

export default AddBlogTag;
