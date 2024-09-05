import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getAllCategories } from "../../services/category-service";
import { getAllTypes } from "../../services/type-service";
import { getAllProductTag } from "../../services/product-tag-service";
import { useNavigate, useParams } from "react-router-dom";
import { getProductBySlug, editProduct } from "../../services/product-service";
import { message } from "antd";

const EditProduct = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: 0,
    image: "",
    authorName: "",
    color: "",
    size: "",
    desc: "",
    type: { _id: "", title: "" },
    category: { _id: "", title: "" },
    tag: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    getProductBySlug(slug).then((product) => {
      setData({
        ...product,
        tag: product.tag.map((t) => t._id),
      });
    });
  }, [slug]);

  useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    getAllTypes().then((types) => setTypes(types));
  }, []);

  useEffect(() => {
    getAllProductTag().then((tags) => setTagsList(tags));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setData({ ...data, image: file.name });
    }
  };

  const handleTagsChange = (e) => {
    const { value, checked } = e.target;
    setData((prevState) => {
      const newTags = checked
        ? [...prevState.tag, value]
        : prevState.tag.filter((t) => t !== value);
      return { ...prevState, tag: newTags };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeType = (e) => {
    const { value } = e.target;
    const selectedType = types.find((type) => type._id === value);
    setData((prevState) => ({
      ...prevState,
      type: selectedType,
    }));
  };

  const handleChangeCategory = (e) => {
    const { value } = e.target;
    console.log(value);
    const selectedCategory = categories.find(
      (category) => category._id === value
    );
    console.log(selectedCategory._id);
    setData((prevState) => ({
      ...prevState,
      category: selectedCategory._id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("authorName", data.authorName);
    formData.append("color", data.color);
    formData.append("size", data.size);
    formData.append("desc", data.desc);
    formData.append("type", data.type._id);
    formData.append("category", data.category);
    formData.append("tag", JSON.stringify(data.tag));
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await editProduct(slug, formData);
      console.log(response);
      message.success("Product edited successfully");
      navigate("/pages/admin");
    } catch (error) {
      message.error("Failed to edit product");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
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
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product Name"
              value={data.name}
              onChange={handleInputChange}
            />

            <label
              htmlFor="price"
              className="block text-lg font-semibold text-gray-700"
            >
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Price"
              value={data.price}
              onChange={handleInputChange}
            />

            <label
              htmlFor="image"
              className="block text-lg font-semibold text-gray-700"
            >
              Product Image:
            </label>
            {data.image && !selectedImage && (
              <div className="mb-4">
                <img
                  src={`http://localhost:5000/api/public/images/${data.image}`}
                  alt="Product"
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
              htmlFor="authorName"
              className="block text-lg font-semibold text-gray-700"
            >
              Author Name:
            </label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Author Name"
              value={data.authorName}
              onChange={handleInputChange}
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
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Color"
              value={data.color}
              onChange={handleInputChange}
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
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Size"
              value={data.size}
              onChange={handleInputChange}
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
              rows="4"
              className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Description"
              value={data.desc}
              onChange={handleInputChange}
            />
          </div>

          <label
            htmlFor="type"
            className="block text-lg font-semibold text-gray-700"
          >
            Type:
          </label>
          <select
            name="type"
            id="type"
            className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data?.type?._id}
            onChange={handleChangeType}
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
            className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data?.category?._id}
            onChange={handleChangeCategory}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>

          <label
            htmlFor="tags"
            className="block text-lg font-semibold text-gray-700"
          >
            Tags:
          </label>
          <div className="flex flex-wrap gap-4 mb-6">
            {tagsList.map((tag) => (
              <div key={tag._id} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={`tag-${tag._id}`}
                  value={tag._id}
                  checked={data.tag.includes(tag._id)}
                  onChange={handleTagsChange}
                  className="mr-2"
                />
                <label htmlFor={`tag-${tag._id}`} className="text-gray-700">
                  {tag.title}
                </label>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
