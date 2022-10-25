import React, { useState } from "react";

const Test = () => {
  const [val, setVal] = useState("aa");
  return (
    <div>
      <p>{val}</p>
      <button
        style={{ height: "2rem", width: "2rem", backgroundColor: "orange" }}
        onClick={() => {
          setVal((prev) => "bb");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Test;
