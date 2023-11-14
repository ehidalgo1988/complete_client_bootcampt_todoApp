import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
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
      console.log("DATA product single:=======> ", data);
      if (data) {
        setState({ ...state, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
          <img src={state.image} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{state.title.substring(0, 20)}...</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {state.description.substring(0, 20)}
              </li>
              <li className="list-group-item">Price: ${state.price}</li>
              <li className="list-group-item">Category: {state.category}</li>
              <li className="list-group-item">Quantity: {state.quantity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
