import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SideNav from "../../components/SideNav";

import { Link, useNavigate } from "react-router-dom";

export default function AllProduct() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

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

  const handleDelete = async (_id) => {
    // e.preventDefault();

    try {
      const { data } = await axios.delete(`/product/${_id}`);
      setProducts((prev) => prev.filter((product) => product._id !== _id));
      toast.success(`this product is deleted`);
      console.log(data);
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
        <div className="col-md-10 ">
          <div className="row g-4">
            {products?.map((product) => (
              <div key={product._id} className="col-3">
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

                    <div className="d-flex justify-content-evenly">
                      <Link
                        className="btn btn-primary"
                        to={`/product/update/${product._id}`}
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
}
