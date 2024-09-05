import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AdminButtons from "../../components/admin/AdminButtons";
import AdminBody from "../../components/admin/AdminBody";

const AdminPage = () => {
  return (
    <>
      <Header />
      <div className="breadcrumb flex items-center justify-center mt-4 text-lg text-gray-500 bg-[#F6F6F6] py-12">
        <span>Admin Dashboard</span>
      </div>

      <AdminButtons />

      <AdminBody />

      <Footer />
    </>
  );
};

export default AdminPage;
