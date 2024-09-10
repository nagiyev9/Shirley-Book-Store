import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EditItem from "../../components/template/EditItem";
import { useParams, useNavigate } from "react-router-dom";
import { getTypeBySlug, editType } from "../../services/type-service";
import { message } from "antd";

const EditType = () => {
  const { slug } = useParams();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTypeBySlug(slug);
        if (result.length > 0) {
          setData(result[0].title);
        }
      } catch (err) {
        message.error("Error fetching type: " + err.message);
      }
    };

    fetchData();
  }, [slug]);

  const handleEdit = async (updatedData) => {
    try {
      const response = await editType(slug, updatedData);
      if (response.status === 200) {
        message.success("Type updated successfully");
        navigate("/pages/admin");
      } else {
        message.error("Failed to update type");
      }
    } catch (error) {
      message.error("Failed to edit type: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <EditItem
        item={"Type"}
        inputName={"title"}
        labelName={"Type"}
        data={data}
        onEdit={handleEdit}
      />
      <Footer />
    </>
  );
};

export default EditType;
