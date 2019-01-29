import React from "react";
import "./Photo.css"
import James from "./Images/James.jpg";

const ProfilePic = () => (
    <div>
    {/* <h1 className="display-3">Profile Pic</h1> */}
    <img src={James} alt="Profile pic" />
    </div>
        );

export default ProfilePic;
