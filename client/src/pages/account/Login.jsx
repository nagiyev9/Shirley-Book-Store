import React, { useState } from "react";
import { Button, Input, message, Spin } from "antd";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth-service";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await login(formData);
      if (response.status === 200) {
        message.success("Login successful!");
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("firstName", response.user.firstName);
        localStorage.setItem("lastName", response.user.lastName);
        localStorage.setItem("email", response.user.email);
        localStorage.setItem("role", response.user.role);
        localStorage.setItem("id", response.user._id);
        navigate("/"); 
      } else {
        message.error(response.message || "Login failed, please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="breadcrumb flex items-center justify-center mt-4 text-sm text-gray-500 bg-[#F6F6F6] py-12">
        <span>HOME</span> <span className="mx-2">/</span> <span>ACCOUNT</span>
      </div>

      <div className="flex flex-col items-center justify-center my-16">
        <div className="bg-[#F6F6F6] p-8 shadow-md rounded-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <p className="text-center text-gray-500 mb-4">
            Please login using account details below.
          </p>
          <div className="mb-4">
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 p-2 border"
            />
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="px-2 py-0 border"
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <Button
              type="primary"
              block
              className="bg-black h-10 rounded-none max-w-[100px]"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Spin size="small" /> : "Sign In"}
            </Button>
            <Link to={"#"} className="text-gray-500 text-sm">
              Forgot your password?
            </Link>
          </div>

          <div className="flex justify-between mt-4">
            <Link to={"/account/register"} className="text-gray-500 text-sm">
              Create account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
