import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  // Github Context
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  // Rendering
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
