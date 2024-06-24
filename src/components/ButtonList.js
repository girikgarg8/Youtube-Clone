import React from "react";
import Button from "./Button";

const BUTTON_NAMES = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Computer Programming",
  "Study skills",
  "Media theories",
  "Physics",
  "Mathematics",
  "Chemistry",
  "Arts",
  "Music",
];

const ButtonList = () => {
  return (
    <div className="flex whitespace-nowrap overflow-x-auto w-screen">
      {BUTTON_NAMES.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
