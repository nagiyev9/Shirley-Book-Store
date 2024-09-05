import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EditItem from "../../components/template/EditItem";
import { getBlogTagBySlug, editBlogTag } from "../../services/blog-tag-service";
import { useParams, useNavigate } from "react-router-dom";
import { message } from "antd";

const EditBlogTag = () => {
  const { slug } = useParams();
  const [data, setData] = useState({ title: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getBlogTagBySlug(slug).then((response) => {
      setData({ title: response?.title });
    });
  }, [slug]);

  console.log(data.title);

  const handleEdit = async (updatedData) => {
    try {
      await editBlogTag(slug, updatedData);
      message.success("Blog tag updated successfully!");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to edit blog tag.");
      console.error("Failed to edit blog tag:", error);
    }
  };

  return (
    <>
      <Header />
      <EditItem
        item={"Blog Tag"}
        inputName={"title"}
        labelName={"Tag"}
        data={data.title}
        onEdit={handleEdit}
      />
      <Footer />
    </>
  );
};

export default EditBlogTag;
