import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getAllBlogTags } from "../../services/blog-tag-service";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug, editBlog } from "../../services/blog-service";
import { message } from "antd";

const EditBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [tagsList, setTagsList] = useState([]);
  const [data, setData] = useState({
    title: "",
    desc: "",
    publisherName: "",
    tags: [], 
    image: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getAllBlogTags().then((data) => {
      setTagsList(data);
    });
  }, []);

  useEffect(() => {
    getBlogBySlug(slug).then((blog) => {
      if (blog && blog.length > 0) {
        setData(blog[0]);
      } else {
        console.error("Blog not found");
      }
    });
  }, [slug]);

  const handleTagsChange = (e) => {
    const { value, checked } = e.target;
    setData((prevState) => {
      const newTags = checked
        ? [...prevState.tags, { _id: value }]
        : prevState.tags.filter((t) => t._id !== value);
      return { ...prevState, tags: newTags };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("publisherName", data.publisherName);
    formData.append("tags", JSON.stringify(data.tags.map((tag) => tag._id))); 
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await editBlog(slug, formData);
      navigate("/pages/admin");
      message.success("Blog updated successfully");
    } catch (error) {
      message.error("Failed to update blog");
      console.error("Error updating blog:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Edit Blog
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
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
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
              className="w-full min-h-[120px] px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Description"
              value={data.desc}
              onChange={(e) => setData({ ...data, desc: e.target.value })}
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
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Publisher Name"
              value={data.publisherName}
              onChange={(e) =>
                setData({ ...data, publisherName: e.target.value })
              }
            />

            <label
              htmlFor="image"
              className="block text-lg font-semibold text-gray-700"
            >
              Blog Image:
            </label>

            {data.image && !selectedImage && (
              <div className="mb-4">
                <img
                  src={`http://localhost:5000/api/public/images/${data.image}`}
                  name="image"
                  alt="Blog"
                  className="object-cover mb-2 rounded"
                  width={250}
                />
                <p className="text-gray-700 text-sm">
                  Current image: {data.image}
                </p>
              </div>
            )}
            <input
              type="file"
              name="image"
              id="image"
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleImageChange}
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
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={data.tags.some((t) => t._id === tag._id)}
                    onChange={handleTagsChange}
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
            Update Blog
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditBlog;
