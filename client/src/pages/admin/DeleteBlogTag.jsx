import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DeleteItem from "../../components/template/DeleteItem";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { deleteBlogTag } from "../../services/blog-tag-service";

const DeleteBlogTag = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await deleteBlogTag(slug);
        message.success("Tag deleted successfully!");
        navigate("/pages/admin");
    } catch (error) {
        message.error("Failed to delete tag. Please try again.");
        console.error("Error deleting tag:", error);
    }
  };

  return (
    <>
      <Header />
      <DeleteItem onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default DeleteBlogTag;
