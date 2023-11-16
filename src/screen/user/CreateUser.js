import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function CreateUser() {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(name, email, password)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/create-user`,
        {
          name,
          email,
          password,
          avatar,
        }
      );
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Registration successful");
        navigate("/");
      }
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
        <div className="col-8">
          <h3 className="h3 text-center">Create User</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4 p-2 "
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <input
              type="email"
              className="form-control mb-4 p-2 "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <input
              type="password"
              className="form-control mb-4 p-2 "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              className="form-control mb-4 p-2 "
              placeholder="Link your avatar image"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              autoFocus
            />
            <button className="btn btn-primary " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
