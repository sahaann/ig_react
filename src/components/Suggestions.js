import React from "react";
import Userpfp from "../assets/User.jpeg";
function Suggestions(props) {
  return (
    <div className="suggestions">
      <img
        src={Userpfp}
        alt="Sahan's Profile picture"
        className="suggestions-pfp"
      />
      <div className="suggestions-name-container">
        <div className="myprofile-username">{props.user}</div>
        <div className="myprofile-name">{props.username}</div>
      </div>
      <div className="mybtn">Follow</div>
    </div>
  );
}
export default Suggestions;
