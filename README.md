*Shirley Book Store*

Shirley Book Store is a comprehensive application for managing books, blogs, and other related entities. It features a modern frontend built with React, Tailwind CSS, and AntDesign, and a robust backend powered by Node.js, Express.js, and MongoDB.

- Features:
    - Frontend:
      - Built with React, Tailwind CSS, and AntDesign.
      - Responsive design for various devices.
      - CRUD operations for managing products (books), blogs, categories, blog tags, product tags, types, and roles.
      - User registration and login with hashed passwords and validation.
      - Role-based access control (admin/user).
      - JSON Web Token (JWT) authentication with refresh and access tokens.

    - Backend:
        - Built with Node.js and Express.js.
        - RESTful API for interacting with the frontend.
        - MongoDB for data storage.
        - Role-based access control for managing users.
        - Secure password hashing and JWT for authentication.
     
- Setup:
    - Frontend:
        - 1. Install Dependencies:

                 - npm install

        - 2. Run the Frontend:
         
                 - npm start

        - The frontend will be accessible at http://localhost:3000.
     
   - Backend:
        - 1. Install Dependencies:
         
                  - npm install
             
        - 2. Setup Environment Variables: Create a .env file in the root directory with the following content:

                 - # PORT
                 - PORT=5000
    
                 - # MongoDB Connection URI
                 - MONGO_URI=mongodb+srv://nagiyev9:nagiyev9@cluster0.0m4t7s4.mongodb.net/shirley
                  
                 - # Json Web Token
                 - JWT_SECRET_KEY='8b71472f-2308-41fe-8246-678e35d03458'
                 - JWT_REFRESH_SECRET_KEY='9a63972f-2308-07cr-8246-678c02d09027'
             
             
        - 3. Run The Backend:

                 - npm start

             -The backend will be accessible at http://localhost:5000.

- Dependencies:
    - Frontend:

           - "@ant-design/charts": "^2.1.2",
           - "@ant-design/icons": "^5.4.0",
           - "@ant-design/plots": "^2.2.8",
           - "@reduxjs/toolkit": "^2.2.7",
           - "@testing-library/jest-dom": "^5.17.0",
           - "@testing-library/react": "^13.4.0",
           - "@testing-library/user-event": "^13.5.0",
           - "antd": "^5.20.1",
           - "jwt-decode": "^4.0.0",
           - "react": "^18.3.1",
           - "react-dom": "^18.3.1",
           - "react-redux": "^9.1.2",
           - "react-router-dom": "^6.26.0",
           - "react-scripts": "5.0.1",
           - "web-vitals": "^2.1.4"

  - Backend:

          - "bcrypt": "^5.1.1",
         - "cors": "^2.8.5",
         - "dotenv": "^16.4.5",
         - "express": "^4.19.2",
         - "express-validator": "^7.2.0",
         - "jsonwebtoken": "^9.0.2",
         - "mongodb": "^6.8.0",
         - "mongoose": "^8.5.4",
         - "morgan": "^1.10.0",
         - "multer": "^1.4.5-lts.1",
         - "slugify": "^1.6.6"

- Lisence:
    - This project is licensed under the MIT License.


![image](https://github.com/user-attachments/assets/99eab225-4cfb-4076-beb5-b77f6b04e063)

![image](https://github.com/user-attachments/assets/4b08130d-b9db-4216-affb-cb374dc1535a)

![image](https://github.com/user-attachments/assets/88572f0d-b61a-48d6-b6c1-367bfb1da45e)

![image](https://github.com/user-attachments/assets/bc5e3471-f33d-4f5e-8f38-51abc6d74986)

![image](https://github.com/user-attachments/assets/e1b72020-7391-46df-bc6e-80e25d79e34e)

![image](https://github.com/user-attachments/assets/97a45ffa-00e3-402b-abaa-41bf85db0ab2)

![image](https://github.com/user-attachments/assets/7bcb70a2-ba8b-459b-985a-011f8cc206cb)
