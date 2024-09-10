import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EditItem from "../../components/template/EditItem";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCategoryBySlug,
  editCategory,
} from "../../services/category-service";
import { message } from "antd";

const EditCategory = () => {
  const { slug } = useParams();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategoryBySlug(slug);
        console.log(response[0]?.title);
        setData(response[0]?.title);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchData();
  }, [slug]);

  const handleEdit = async (updatedData) => {
    try {
      const response = await editCategory(slug, updatedData);
      if (response.status === 200) {
        message.success(response.message);
      }
      navigate("/pages/admin"); 
    } catch (error) {
      message.error("Failed to edit category.");
      console.error("Failed to edit category:", error);
    }
  };

  return (
    <>
      <Header />
      <EditItem
        item={"Category"}
        inputName={"title"}
        labelName={"Category"}
        data={data}
        onEdit={handleEdit}
      />
      <Footer />
    </>
  );
};

export default EditCategory;
