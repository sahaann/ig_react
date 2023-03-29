import React from "react";
import Userpfp from "../assets/User.jpeg";
const Stories = (props) => (
  <div>
    <img src={Userpfp} className="stories-pfp"></img>
    <p className="stories-user">{props.username}</p>
  </div>
);
export default Stories;
