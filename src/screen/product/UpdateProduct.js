import axios from "axios";
import SideNav from "../../components/SideNav";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    quantity: 0,
  });

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      // Fetch all users here and update the state with the result.
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/product/${params.productid}`
      );
      // console.log("DATA product update:=======> ", data);
      if (data) {
        setState({ ...state, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/product-update/${params.productid}`,
        state
      );
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Product updated");
        // navigate("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* {JSON.stringify(state, null, 4)} */}
      <div className="row ">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <h2>Create Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-froup">
              <label>Title</label>
              <input
                name="title"
                onChange={handleChange}
                // onChange={(e) => setTitle(e.target.value)}
                value={state.title}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-froup">
              <label>Description</label>
              <input
                name="description"
                // onChange={(e) => setDescription(e.target.value)}
                onChange={handleChange}
                value={state.description}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-froup">
              <label>Price</label>
              <input
                name="price"
                // onChange={(e) => setPrice(e.target.value)}
                onChange={handleChange}
                value={state.price}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-froup">
              <label>Category</label>
              <input
                name="category"
                // onChange={(e) => setCategory(e.target.value)}
                onChange={handleChange}
                value={state.category}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-froup">
              <label>Image</label>
              <input
                name="image"
                // onChange={(e) => setImage(e.target.value)}
                onChange={handleChange}
                value={state.image}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-froup">
              <label>Quantity</label>
              <input
                name="quantity"
                // onChange={(e) => setQuantity(e.target.value)}
                onChange={handleChange}
                value={state.quantity}
                className="form-control"
                type="text"
              />
            </div>
            <button className="btn btn-primary mt-3">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
