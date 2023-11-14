import axios from "axios";
import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
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

  const handleDelete = async (_id) => {
    // e.preventDefault();

    try {
      const { data } = await axios.delete(`/user/${_id}`);
      setUsers((prev) => prev.filter((user) => user._id !== _id));
      toast.success(`this user is deleted`);
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
          {/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          <div className="row g-4">
            {users?.map((user) => (
              <div key={user._id} className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={user.avatar} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <div className="d-flex justify-content-evenly">
                      <Link
                        className="btn btn-primary"
                        to={`/user/update/${user._id}`}
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(user._id)}
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
