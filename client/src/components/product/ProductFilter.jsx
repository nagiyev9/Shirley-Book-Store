import React, { useEffect, useState } from "react";
import { Col, Input, Tag, Checkbox } from "antd";
import { getAllCategories } from "../../services/category-service";
import { getAllTypes } from "../../services/type-service";
import { getAllProductTag } from "../../services/product-tag-service";

const { Search } = Input;

const ProductFilter = ({ newClass }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(false);

  const [categories, setCategories] = useState([]);
  const [type, setType] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    getAllTypes().then((data) => {
      setType(data);
    });
  }, []);

  useEffect(() => {
    getAllProductTag().then((data) => {
      setTags(data);
    })
  }, []);

  const handleCheckboxChange = (e) => {
    setSelectedCategories({
      ...selectedCategories,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      <Col xs={24} md={8} lg={6} className={`${newClass}`}>
        <div className="mb-6">
          <Search placeholder="Search our store" />
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          {categories.map((category) => (
            <>
              <Checkbox
                className="my-2"
                name={category.title}
                checked={selectedCategories[category.title]}
                onChange={handleCheckboxChange}
              >
                {category.title}
              </Checkbox>
              <br />
            </>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">Products Type</h3>
          {type.map((type) => (
            <>
              <Checkbox
                key={type.id}
                color={selectedTag === type.title ? "blue" : "default"}
                className="cursor-pointer mb-4"
              >
                {type.title}
              </Checkbox>
              <br />
            </>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">Tags</h3>
          <div>
            {tags.map((tag) => (
              <Tag
                key={tag._id}
                color={selectedTag === tag._id ? "blue" : "default"}
                className="cursor-pointer mb-2"
              >
                {tag.title}
              </Tag>
            ))}
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductFilter;
