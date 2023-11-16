import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "../../components/SideNav";

export default function SingleUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetchSingleUser();
  }, []);

  const fetchSingleUser = async () => {
    try {
      // Fetch all users here and update the state with the result.
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/user/${params.userid}`
      );
      console.log("DATA  single  user:=======> ", data);
      if (data) {
        setAvatar(data.avatar);
        setName(data.name);
        setEmail(data.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <img src={avatar} className="card-img-top" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
