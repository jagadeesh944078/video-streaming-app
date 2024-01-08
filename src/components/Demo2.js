import React, { useState, useRef } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  return (
    <div className="m-4 w-64 border border-black">
      <div className="m-4">
        <button
          className="bg bg-green-200 p-2 rounded-md text-sm"
          onClick={() => (x = x + 1)}
        >
          Increase x
        </button>
        <span className="font-bold ml-2">x:{x}</span>
      </div>
      <div className="m-4">
        <button
          className="bg bg-green-200 p-2 rounded-md text-sm"
          onClick={() => setY(y + 1)}
        >
          Increase y
        </button>
        <span className="font-bold ml-2">Y:{y}</span>
      </div>
      <div className="m-4">
        <button
          className="bg bg-green-200 p-2 rounded-md text-sm"
          onClick={() => (ref.current = ref.current + 1)}
        >
          Increase Ref
        </button>
        <span className="font-bold ml-2">Ref: {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
