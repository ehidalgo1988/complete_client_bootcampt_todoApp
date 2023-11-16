import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllProducts();
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      // Fetch all users here and update the state with the result.
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/all-users`
      );
      setUsers(data);
      console.log("DATA:=======> ", data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      // Fetch all users here and update the state with the result.
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/all-products`
      );
      setProducts(data);
      // console.log("DATA:=======> ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <h1 className="text-center">Our Users</h1>
          <div className="row ">
            {users?.map((user) => (
              <div key={user._id} className="col-3">
                <Link to={`/single-user/${user._id}`}>
                  <div className="card mb-4" style={{ width: "16rem" }}>
                    <img
                      style={{ height: "20rem" }}
                      src={user.avatar}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">{user.email}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <hr />
          <h2 className="text-center">Our Product </h2>
          <div className="row mb-2">
            {products?.map((product) => (
              <Link
                to={`single-product/${product._id}`}
                key={product._id}
                className="col-3"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 20)}...
                    </h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        {product.description.substring(0, 20)}
                      </li>
                      <li className="list-group-item">
                        Price: ${product.price}
                      </li>
                      <li className="list-group-item">
                        Category: {product.category}
                      </li>
                      <li className="list-group-item">
                        Quantity: {product.quantity}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
