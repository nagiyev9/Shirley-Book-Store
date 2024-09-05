import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EditItem from "../../components/template/EditItem";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductTagBySlug,
  editProductTag,
} from "../../services/product-tag-service";

const EditProductTag = () => {
  const { slug } = useParams();
  const [data, setData] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductTagBySlug(slug);
        console.log(response[0]?.title);
        setData(response[0]?.title); 
      } catch (error) {
        console.error("Error fetching product tag:", error);
      }
    };

    fetchData();
  }, [slug]); 
  const handleEdit = async (updatedData) => {
    try {
      await editProductTag(slug, updatedData);
      navigate("/pages/admin"); 
    } catch (error) {
      console.error("Failed to edit product tag:", error);
    }
  };

  return (
    <>
      <Header />
      <EditItem
        item={"Product Tag"}
        inputName={"title"}
        labelName={"Tag"}
        data={data}
        onEdit={handleEdit}
      />
      <Footer />
    </>
  );
};

export default EditProductTag;
