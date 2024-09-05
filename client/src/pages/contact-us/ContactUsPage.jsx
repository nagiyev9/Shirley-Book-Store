import React from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./contactUsPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ContactUsPage = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <>
      <Header />
      <div className="breadcrumb flex items-center justify-center mt-4 text-sm text-gray-500 bg-[#F6F6F6] py-12">
        <span>HOME</span> <span className="mx-2">/</span> <span>CONTACT US</span>
      </div>
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <EnvironmentOutlined /> Address goes here, street, Crossroad 123.
          </p>
          <p>
            <MailOutlined /> info@example.com / info@example.com
          </p>
          <p>
            <PhoneOutlined /> +1 35 776 859 000 / +1 35 776 859 011
          </p>
        </div>
        <div className="contact-form">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="subject"
              rules={[{ required: true, message: "Please input the subject!" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea placeholder="Message" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="send-message-button h-12 rounded-none"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
