import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../util/const";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const MenuCards = () => {
  const [videosList, setVideoList] = useState([]);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(VIDEOS_API);
    const json = await data.json();
    setVideoList(json.items);
  };

  if (!videosList) return null;

  return (
    <div className="flex flex-wrap">
      {videosList.map((videos) => (
        <Link to={"/watch?v=" + videos.id} key={videos.id}>
          <VideoCard items={videos} />
        </Link>
      ))}
    </div>
  );
};

export default MenuCards;
