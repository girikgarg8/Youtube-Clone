import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 px-5 py-2 m-2 rounded-lg h-10">
      {name}
    </button>
  );
};

export default Button;
