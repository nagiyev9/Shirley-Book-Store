import React, { useEffect, useState } from "react";
import { Tabs, Table, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAllBlogTags } from "../../services/blog-tag-service";
import { getAllProductTag } from "../../services/product-tag-service";
import { getAllTypes } from "../../services/type-service";
import { getAllRoles } from "../../services/role-service";
import { getAllCategories } from "../../services/category-service";
import { getAllBlogs } from "../../services/blog-service";
import { getAllProducts } from "../../services/product-service";
import { getAllUsers } from "../../services/user-service";

const { TabPane } = Tabs;

const AdminBody = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const [blogTags, setBlogTags] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [types, setTypes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllBlogTags().then((data) => {
      setBlogTags(data);
    });
  }, []);

  useEffect(() => {
    getAllProductTag().then((data) => {
      setProductTags(data);
    });
  }, []);

  useEffect(() => {
    getAllTypes().then((data) => {
      setTypes(data);
    });
  }, []);

  useEffect(() => {
    getAllRoles().then((data) => {
      setRoles(data);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  useEffect(() => {
    getAllProducts().then((data) => {
      data.forEach((element) => {
        setProducts((prev) => [...prev, element]);
      });
    });
  }, []);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const productColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={`http://localhost:5000/api/public/images/${text}`}
          alt="Product"
          width={130}
          height={90}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <div>{text.title}</div>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) =>
        record.originalPrice ? (
          <div>
            <span className="line-through">${record.originalPrice}</span>
            <span className="text-green-600 ml-2">${record.salePrice}</span>
          </div>
        ) : (
          <span>${record.price}</span>
        ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/product/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/product/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const blogColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={`http://localhost:5000/api/public/images/${text}`}
          alt="Product"
          width={130}
          height={90}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, record) => {
        return <div>{record.updatedAt.slice(0, 10)}</div>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/blog/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/blog/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const categoryColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/category/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/category/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const roleColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Name",
      dataIndex: "role",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/role/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/role/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const typeColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/type/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/type/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const blogTagColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/blog-tag/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/blog-tag/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const productTagColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/product-tag/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
            <Link to={`/admin/product-tag/delete/${record.slug}`}>
              <Tooltip title="Delete">
                <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const userColumns = [
    {
      title: "№ ",
      key: "index",
      render: (text, record, index) => {
        return <div className="font-bold">{index + 1}</div>;
      },
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text, record) => {
        return (
          <div>
            <div className="font-bold">{record.firstName}</div>
          </div>
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      render: (text, record) => {
        return (
          <div>
            <div className="font-bold">{record.lastName}</div>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => {
        return (
          <div>
            <div className="font-bold">{record.email}</div>
          </div>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text, record) => {
        return (
          <div>
            <div className="font-bold">{record.role.role}</div>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-4">
            <Link to={`/admin/user/edit/${record.slug}`}>
              <Tooltip title="Edit">
                <EditOutlined className="text-xl hover:text-orange-500 transition-all" />
              </Tooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="my-10 md:mx-28 mx-8">
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Products" key="1">
          <Table
            columns={productColumns}
            dataSource={products}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Blogs" key="2">
          <Table
            columns={blogColumns}
            dataSource={blogs}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>
        <TabPane tab="Categories" key="3">
          <Table
            columns={categoryColumns}
            dataSource={categories}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Roles" key="4">
          <Table
            columns={roleColumns}
            dataSource={roles}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Types" key="5">
          <Table
            columns={typeColumns}
            dataSource={types}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Blog Tags" key="6">
          <Table
            columns={blogTagColumns}
            dataSource={blogTags}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Product Tags" key="7">
          <Table
            columns={productTagColumns}
            dataSource={productTags}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>

        <TabPane tab="Users" key="8">
          <Table
            columns={userColumns}
            dataSource={users}
            rowKey="id"
            pagination={false}
            bordered
            scroll={{ x: 700, y: 400 }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminBody;
