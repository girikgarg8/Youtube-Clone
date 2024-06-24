import React from "react";
import userIcon from "../assets/User_Icon.png";
import { useDispatch } from "react-redux";
import { toggleIsSidebarOpen } from "../slice/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleHamburgerIconClick = () => {
    dispatch(toggleIsSidebarOpen());
  };
  return (
    <div className="flex p-5 m-2 shadow justify-between">
      <div className="flex">
        <div>
          <img
            alt="menu"
            className="h-8 cursor-pointer"
            src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
            onClick={handleHamburgerIconClick}
          />
        </div>
        <div>
          <a href="/">
            <img
              className="h-8 mx-4 cursor-pointer"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" // todo: move image urls to constants
            /> 
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <input
          type="text"
          className="border border-gray-400 rounded-l-full p-2 w-4/5"
        />
        <button className="border border-gray-400 rounded-r-full px-5 py-2 w-1/6">
          Search
        </button>
      </div>
      <div>
        <img alt="user-icon" src={userIcon} className="h-9" />
      </div>
    </div>
  );
};

export default Header;
