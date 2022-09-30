import React from "react";

const Select = (props) => {
  const { type, ariatype, choices } = props;
  return (
    <>
      {choices ? (
        <div className="select-hold">
          <div className="select-style">
            <select className={type} aria-label={ariatype}>
              {choices.map((item) => {
                return <option value={item.value}>{item.display}</option>;
              })}
            </select>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Select;
