import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-xl pr-2 mr-2">
      <div>
        <Link to="/">
          <p className="p-2">Home</p>
        </Link>

        <p className="p-2">Trending</p>
        <p className="p-2">Subscriptions</p>
      </div>
      <div className="my-4">
        <p className="p-2">Library</p>
        <p className="p-2">History</p>
        <p className="p-2">Liked Videos</p>
      </div>
      <div>
        <p className="p-2">Music</p>
        <p className="p-2">Movie</p>
        <p className="p-2">Live</p>
        <p className="p-2">Gaming</p>
      </div>
    </div>
  );
};

export default SideBar;
