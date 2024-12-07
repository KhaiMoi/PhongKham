import React from "react";
import Navbar from "./Navbar";
import Router from "../Routes/Router";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="">
        <Router />
      </div>
    </div>
  );
};

export default Home;
