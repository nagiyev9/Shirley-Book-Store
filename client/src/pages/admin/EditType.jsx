import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EditItem from "../../components/template/EditItem";
import { useParams } from "react-router-dom";
import { getTypeBySlug } from "../../services/type-service";

const EditType = () => { 

  const { slug } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getTypeBySlug(slug).then((data) => {
      setData(data[0].title);
    })
  })

  return (
    <>
      <Header />
      <EditItem item={"Type"} inputName={"title"} labelName={"Type"} data={data}/>
      <Footer />
    </>
  );
};

export default EditType;
