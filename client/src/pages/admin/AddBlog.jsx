import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getAllBlogTags } from "../../services/blog-tag-service";
import { addNewBlog } from "../../services/blog-service";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [tagsList, setTagsList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    publisherName: "",
    image: null,
    tags: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getAllBlogTags();
        setTagsList(data);
      } catch (error) {
        message.error("Failed to fetch tags. Please try again.");
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      if (checked) {
        return { ...prevFormData, tags: [...prevFormData.tags, value] };
      } else {
        return {
          ...prevFormData,
          tags: prevFormData.tags.filter((tag) => tag !== value),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("publisherName", formData.publisherName);
    formDataToSend.append("image", formData.image);
    formData.tags.forEach((tag) => formDataToSend.append("tags", tag));

    try {
      await addNewBlog(formDataToSend); 
      message.success("Added new blog successfully!");
      setFormData({
        title: "",
        desc: "",
        publisherName: "",
        image: null,
        tags: [],
      });
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to add blog. Please try again.");
      console.error("Error adding blog:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Add New Blog
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-semibold text-gray-700"
            >
              Blog Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Title"
            />

            <label
              htmlFor="desc"
              className="block text-lg font-semibold text-gray-700"
            >
              Description:
            </label>
            <textarea
              name="desc"
              id="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-full min-h-[120px] px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Description"
            ></textarea>

            <label
              htmlFor="publisherName"
              className="block text-lg font-semibold text-gray-700"
            >
              Publisher Name:
            </label>
            <input
              type="text"
              name="publisherName"
              id="publisherName"
              value={formData.publisherName}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Publisher Name"
            />

            <label
              htmlFor="image"
              className="block text-lg font-semibold text-gray-700"
            >
              Blog Image:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="tags"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Tags:
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {tagsList.map((tag) => (
                <label key={tag._id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag._id}
                    onChange={handleTagChange}
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{tag.title}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#62ab00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition duration-300"
          >
            Add Blog
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddBlog;
