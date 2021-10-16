import React, { Fragment } from "react";
// Users Components
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <div className="card">
      <Search />
      <Users />
    </div>
  );
};

export default Home;
