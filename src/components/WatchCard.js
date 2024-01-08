import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeAction } from "../util/appMenuSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchCard = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeAction());
  }, []);

  return (
    <div className="ml-6 w-full">
      <div className="flex">
        <div>
          <iframe
            width="850"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      <div>
        <h1 className="font-bold text-xl my-4">Comments :</h1>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchCard;
