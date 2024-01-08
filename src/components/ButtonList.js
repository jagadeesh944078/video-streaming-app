import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="p-2 m-2 flex">
      <Button name={"All"} />
      <Button name={"Music"} />
      <Button name={"React"} />
      <Button name={"Latest"} />
    </div>
  );
};

export default ButtonList;
