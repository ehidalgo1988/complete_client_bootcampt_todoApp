import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function UpdateUser() {
  // state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  // console.log("params==>", params.userid);
  useEffect(() => {
    fetchSingleUser();
  }, []);

  const fetchSingleUser = async () => {
    try {
      // Fetch all users here and update the state with the result.
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/user/${params.userid}`
      );
      console.log("DATA:=======> ", data);
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
      setAvatar(data.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(name, email, password)
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/user-update/${params.userid}`,
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
        toast.success("Update successful");
        // navigate("/dashboard/user");
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
        <div className="col-md-8 ">
          <h3 className="h3 text-center">Update User</h3>
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
