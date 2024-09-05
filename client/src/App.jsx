import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import FAQPage from "./pages/FAQ/FAQPage";
import ContactUsPage from "./pages/contact-us/ContactUsPage";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import BlogPage from "./pages/blog/BlogPage";
import BookCard from "./pages/product/BookCard";
import ProductDetail from "./pages/product/ProductDetail";
import AdminPage from "./pages/admin/AdminPage";
import AddCategory from "./pages/admin/AddCategory";
import AddType from "./pages/admin/AddType";
import AddRole from "./pages/admin/AddRole";
import AddBlogTag from "./pages/admin/AddBlogTag";
import AddProductTag from "./pages/admin/AddProductTag";
import AddBlog from "./pages/admin/AddBlog";
import AddProduct from "./pages/admin/AddProduct";
import EditBlogTag from "./pages/admin/EditBlogTag";
import EditProductTag from "./pages/admin/EditProductTag";
import EditType from "./pages/admin/EditType";
import EditRole from "./pages/admin/EditRole";
import EditCategory from "./pages/admin/EditCategory";
import EditBlog from "./pages/admin/EditBlog";
import EditProduct from "./pages/admin/EditProduct";
import EditUser from "./pages/admin/EditUser";
import DeleteProductTag from "./pages/admin/DeleteProductTag";
import DeleteBlogTag from "./pages/admin/DeleteBlogTag";
import DeleteType from "./pages/admin/DeleteType";
import DeleteRole from "./pages/admin/DeleteRole";
import DeleteCategory from "./pages/admin/DeleteCategory";
import DeleteBlog from "./pages/admin/DeleteBlog";
import DeleteProduct from "./pages/admin/DeleteProduct";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/faq" element={<FAQPage />} />
        <Route path="/pages/contact" element={<ContactUsPage />} />
        <Route
          path="/pages/admin"
          element={
            localStorage.getItem("role") === "66cf7b4a6d1af1a2de4a53c0" ? (
              <AdminPage />
            ) : (
              <Error />
            )
          }
        />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/blogs/news" element={<BlogPage />} />
        <Route path="/collections/all" element={<BookCard />} />
        <Route path="/collection/detail/:slug" element={<ProductDetail />} />
        <Route path="/add/category" element={<AddCategory />} />
        <Route path="/add/type" element={<AddType />} />
        <Route path="/add/role" element={<AddRole />} />
        <Route path="/add/blog-tag" element={<AddBlogTag />} />
        <Route path="/add/product-tag" element={<AddProductTag />} />
        <Route path="/add/blog" element={<AddBlog />} />
        <Route path="/add/product" element={<AddProduct />} />
        <Route path="/admin/blog-tag/edit/:slug" element={<EditBlogTag />} />
        <Route
          path="/admin/product-tag/edit/:slug"
          element={<EditProductTag />}
        />
        <Route path="/admin/type/edit/:slug" element={<EditType />} />
        <Route path="/admin/role/edit/:slug" element={<EditRole />} />
        <Route path="/admin/category/edit/:slug" element={<EditCategory />} />
        <Route path="/admin/blog/edit/:slug" element={<EditBlog />} />
        <Route path="/admin/product/edit/:slug" element={<EditProduct />} />
        <Route path="/admin/user/edit/:slug" element={<EditUser />} />
        <Route
          path="/admin/product-tag/delete/:slug"
          element={<DeleteProductTag />}
        />
        <Route
          path="/admin/blog-tag/delete/:slug"
          element={<DeleteBlogTag />}
        />
        <Route path="/admin/type/delete/:slug" element={<DeleteType />} />
        <Route path="/admin/role/delete/:slug" element={<DeleteRole />} />
        <Route
          path="/admin/category/delete/:slug"
          element={<DeleteCategory />}
        />
        <Route path="/admin/blog/delete/:slug" element={<DeleteBlog />} />
        <Route path="/admin/product/delete/:slug" element={<DeleteProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
