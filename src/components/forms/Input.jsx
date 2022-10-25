import React from "react";

const Input = (props) => {
  const {placeholder} = props
  if (placeholder) return (
    <div className="input-hold">
      <input
        className="q1"
        ariaLabel="Search"
        name="q1"
        type="text"
        placeholder={placeholder}
        title="Enter the terms you wish to search for."
      />
    </div>
  );
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
