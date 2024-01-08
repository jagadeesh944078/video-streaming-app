import { useEffect } from "react";
import { LIVE_COMMENTS } from "../util/const";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComments } from "../util/chatSlice";
import ChatMessage from "./ChatMessage";
import { generate, makeComments } from "../util/helper";

const LiveChat = () => {
  const [liveComment, setLiveComment] = useState("");
  const dispatch = useDispatch();
  const liveComments = useSelector((store) => store.chat.comments);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addComments({ name: generate(), comment: makeComments(6) }));
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="ml-2 p-2 border border-black rounded-lg  h-[450px] bg-slate-100 overflow-y-auto flex flex-col-reverse">
        {liveComments.map((comment, index) => (
          <ChatMessage key={index} {...comment} />
        ))}
      </div>
      <form
        className="border border-black p-2 rounded-lg ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComments({ name: "jagadeesh", comment: liveComment }));
        }}
      >
        <input
          className="w-54 border border-gray-400 pl-2"
          type="text"
          value={liveComment}
          onChange={(e) => {
            setLiveComment(e.target.value);
          }}
        />
        <button className="bg bg-green-200 mx-4 p-1 ">send</button>
      </form>
    </div>
  );
};

export default LiveChat;
