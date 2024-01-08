import { useMemo, useState } from "react";
import { findPrime } from "../util/helper";

const Demo = () => {
  const [primeNumber, setPrimeNumber] = useState(0);
  const [isChangeTheme, setIsChangeTheme] = useState(false);
  //   const prime = () => findPrime(primeNumber);
  const prime = useMemo(() => findPrime(primeNumber), [primeNumber]);
  return (
    <div
      className={
        "border border-black w-64 m-3 " + (isChangeTheme && "bg-gray-400")
      }
    >
      <button
        className="bg-green-200 p-2 m-4 rounded-md"
        onClick={() => {
          setIsChangeTheme(!isChangeTheme);
        }}
      >
        Swicth
      </button>
      <div className="m-3">
        <input
          className="border border-black pl-2"
          type="number"
          value={primeNumber}
          onChange={(e) => setPrimeNumber(e.target.value)}
        />
        <h1 className="font-bold my-2">nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
