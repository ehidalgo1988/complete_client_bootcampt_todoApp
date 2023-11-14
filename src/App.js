import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./screen/Home";
import CreateUser from "./screen/user/CreateUser";
import CreateProduct from "./screen/product/CreateProduct";
import axios from "axios";
import { Layout } from "./components/Layout";
import AllUsers from "./screen/user/AllUsers";
import UpdateUser from "./screen/user/UpdateUser";
import AllProduct from "./screen/product/AllProduct";
import UpdateProduct from "./screen/product/UpdateProduct";
import SingleProduct from "./screen/product/SingleProduct";

axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Toaster />
        <Routes>
          {/* user routes */}
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/user/update/:userid" element={<UpdateUser />} />

          {/* product routes */}
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/all-products" element={<AllProduct />} />
          <Route
            path="/single-product/:productid"
            element={<SingleProduct />}
          />
          <Route
            path="/product/update/:productid"
            element={<UpdateProduct />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
