import React, { useState } from "react";
import { Button, Input, message } from "antd";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth-service"; 

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await register(user);
      console.log(response.status);
      if (response.status === 200 || response.status === "ok") {
        message.success(response.message || "Registration successful.");
        navigate("/account/login"); 
      } else {
        message.error(
          response.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      message.error("An error occurred during registration.");
      console.error(error);
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
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Please register using account details below.
          </p>
          <div className="mb-4">
            <Input
              name="firstName"
              placeholder="First Name"
              className="mb-4 p-2 border"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              className="mb-4 p-2 border"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              name="email"
              placeholder="Email"
              className="mb-4 p-2 border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              name="password"
              placeholder="Password"
              className="px-2 py-0 border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <Button
              type="primary"
              block
              className="bg-black h-10 rounded-none max-w-[100px]"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>

          <div className="flex justify-between mt-4">
            <Link to={"/"} className="text-gray-500 text-sm">
              Back to Store
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
