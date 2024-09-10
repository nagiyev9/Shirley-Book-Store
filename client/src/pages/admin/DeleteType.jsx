import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DeleteItem from "../../components/template/DeleteItem";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { deleteType } from "../../services/type-service";

const DeleteType = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteType(slug);
      if (response.status === 200) {
        message.success(response.message);
      }
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to delete type. Please try again.");
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

export default DeleteType;
