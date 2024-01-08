import React from "react";

const VideoCard = ({ items }) => {
  const { snippet, statistics } = items;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className="p-2 my-2 mx-2 w-60 shadow-lg">
      <img className="w-60 h-24" alt="video" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
