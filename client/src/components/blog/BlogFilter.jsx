import React, { useEffect, useState } from "react";
import { Col, Input, Menu, Tag } from "antd";
import { getAllBlogTags } from "../../services/blog-tag-service";

const { Search } = Input;

const BlogFilter = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllBlogTags().then((data) => {
      console.log(data);
      setTags(data);
    })
  }, []);

  const handleSearch = (value) => {
    console.log("Search value:", value);
  };

  const handleMenuClick = (e) => {
    console.log("Selected archive:", e.key);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Col xs={24} md={8} lg={6}>
      <div className="mb-6">
        <Search
          placeholder="Search our store"
          onSearch={handleSearch}
        />
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-4">Archive</h3>
        <Menu onClick={handleMenuClick} mode="vertical">
          <Menu.Item key="1">November 2019</Menu.Item>
          <Menu.Item key="2">October 2019</Menu.Item>
          <Menu.Item key="3">September 2019</Menu.Item>
        </Menu>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-4">Tags</h3>
        <div>
          {tags.map((tag) => (
            <Tag
              key={tag._id}
              color={selectedTag === tag._id ? "blue" : "default"}
              className="cursor-pointer mb-2"
              onClick={() => handleTagClick(tag)}
            >
              {tag.title}
            </Tag>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default BlogFilter;
