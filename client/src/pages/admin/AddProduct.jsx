import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getAllCategories } from "../../services/category-service";
import { getAllTypes } from "../../services/type-service";
import { getAllProductTag } from "../../services/product-tag-service";
import { addNewProduct } from "../../services/product-service";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    authorName: "",
    color: "",
    size: "",
    desc: "",
    type: "",
    category: "",
    tag: [],
    image: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(setCategories);
    getAllTypes().then(setTypes);
    getAllProductTag().then(setTagsList);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      const updatedTags = e.target.checked
        ? [...formData.tag, value]
        : formData.tag.filter((tag) => tag !== value);
      setFormData((prev) => ({ ...prev, tag: updatedTags }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => productData.append(key, item));
      } else {
        productData.append(key, value);
      }
    });

    try {
      const response = await addNewProduct(productData);
      message.success("Product added successfully");
      console.log("Product added successfully:", response);
      setFormData({
        name: "",
        price: "",
        authorName: "",
        color: "",
        size: "",
        desc: "",
        type: "",
        category: "",
        tag: [],
        image: null,
      });
      navigate("/pages/admin");
    } catch (error) {
      message.error("Error adding product");
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700"
            >
              Product Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product Name"
            />

            <label
              htmlFor="price"
              className="block text-lg font-semibold text-gray-700"
            >
              Price:
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Price"
            />

            <label
              htmlFor="image"
              className="block text-lg font-semibold text-gray-700"
            >
              Product Image:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="authorName"
              className="block text-lg font-semibold text-gray-700"
            >
              Author Name:
            </label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Author Name"
            />

            <label
              htmlFor="color"
              className="block text-lg font-semibold text-gray-700"
            >
              Color:
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Color"
            />

            <label
              htmlFor="size"
              className="block text-lg font-semibold text-gray-700"
            >
              Size:
            </label>
            <input
              type="text"
              name="size"
              id="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Size"
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
              placeholder="Enter Description"
            ></textarea>

            <label
              htmlFor="type"
              className="block text-lg font-semibold text-gray-700"
            >
              Type:
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              {types.map((type) => (
                <option key={type._id} value={type._id}>
                  {type.title}
                </option>
              ))}
            </select>

            <label
              htmlFor="category"
              className="block text-lg font-semibold text-gray-700"
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>

            <label
              htmlFor="tag"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Tags:
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {tagsList.map((tag) => (
                <label key={tag._id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="tag"
                    value={tag._id}
                    checked={formData.tag.includes(tag._id)}
                    onChange={handleChange}
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
            Add Product
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
