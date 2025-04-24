import React from "react";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileTop">
            <div className="profileCover">
              <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
              <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Nadine Kumler</h4>
              <span className="profileInfoDesc">Welcome to my profile</span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
