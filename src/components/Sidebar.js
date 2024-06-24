import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <li> Home </li>
        <li> Shorts </li>
        <li> Subscription </li>
        <li> YouTube Music </li>
      </ul>
      <h1 className="font-bold pt-5 pb-2"> Subscriptions </h1>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>
      </ul>
      <h1 className="font-bold pt-5 pb-2"> Explore </h1>
      <ul>
        <li> Trending </li>
        <li> Shopping </li>
        <li> Music </li>
        <li> Films </li>
      </ul>
    </div>
  );
};

export default Sidebar;
