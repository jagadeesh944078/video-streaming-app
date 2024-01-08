import React from "react";

const data = [
  {
    name: "Akshay Saini",
    comment: "javascript teaches very nice",
    reply: [
      {
        name: "Jagadeesh vemula",
        comment: "javascript teaches very nice",
        reply: [
          {
            name: "Jagadeesh vemula",
            comment: "javascript teaches very nice",
            reply: [
              {
                name: "Jagadeesh vemula",
                comment: "javascript teaches very nice",
                reply: [
                  {
                    name: "Jagadeesh vemula",
                    comment: "javascript teaches very nice",
                    reply: [
                      {
                        name: "Jagadeesh vemula",
                        comment: "javascript teaches very nice",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "Akshay Saini", comment: "javascript teaches very nice", reply: [] },
  { name: "Akshay Saini", comment: "javascript teaches very nice", reply: [] },
];

const Comments = ({ item }) => {
  return (
    <div className="flex bg-gray-200 m-2">
      <img
        className="w-12 h-8"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6HveV3RMl5sIDGW1nlGA1uwyjzQM2Eh22A&usqp=CAU"
      />
      <div>
        <p className="font-bold">{item?.name}</p>
        <p>{item?.comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments?.map((item, index) => (
        <div>
          <Comments key={index} item={item} />
          <div className="pl-5 border border-l-black">
            <CommentList key={index} comments={item.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <CommentList comments={data} />
    </div>
  );
};

export default CommentContainer;
