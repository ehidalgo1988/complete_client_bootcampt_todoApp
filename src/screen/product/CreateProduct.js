import axios from "axios";
import SideNav from "../../components/SideNav";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    quantity: 0,
  });

  // state
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  // const [quantity, setQuantity] = useState(0);
  // const [category, setCategory] = useState("");
  // const [image, setImage] = useState("");

  // let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_API}/create-product`,
      //   {
      //     title,
      //     description,
      //     price,
      //     quantity,
      //     category,
      //     image,
      //   }
      // );
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/create-product`,
        state
      );
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Product created");
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
            <button className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
