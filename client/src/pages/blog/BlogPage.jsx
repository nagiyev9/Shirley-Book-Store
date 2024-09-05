import React, { useEffect, useState } from "react";
import { Row, Col, Pagination } from "antd";
import BlogFilter from "../../components/blog/BlogFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getAllBlogs } from "../../services/blog-service";

// Utility function to truncate text
const truncateText = (text, wordLimit) => {
  if (!text) return ""; // Check if text is undefined or null
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="breadcrumb flex items-center justify-center mt-4 text-sm text-gray-500 bg-[#F6F6F6] py-12">
        <span>HOME</span> <span className="mx-2">/</span> <span>NEWS</span>
      </div>
      <div className="container mx-auto py-10 px-4">
        <Row gutter={[24, 24]}>
          <BlogFilter />
          <Col xs={24} md={16} lg={18}>
            <Row gutter={[16, 24]}>
              {blogs.map((blog) => (
                <Col key={blog.id} xs={24} md={12} lg={8} className="mb-8">
                  <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      className="w-full h-48 object-cover"
                      src={`http://localhost:5000/api/public/images/${blog.image}`}
                      alt={blog.title}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 border-b-2 border-gray-500 pb-2">
                        {blog.title}
                      </h3>
                      <div className="text-sm text-gray-600 mb-4">
                        <span>
                          {blog.createdAt.slice(0, 10).split("-").reverse().join("-")}
                        </span>
                        <span className="mx-2">/</span>
                        <span>{blog.comments || "0 comments"}</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {truncateText(blog.desc, 20)}{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
