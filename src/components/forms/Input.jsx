import React from "react";

const Input = () => {
  return (
    <div className="input-hold">
      <input
        className="q1"
        ariaLabel="Search"
        name="q1"
        type="text"
        placeholder="search  /  ابحث"
        title="Enter the terms you wish to search for."
      />
    </div>
  );
};

export default Input;
