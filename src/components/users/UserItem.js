import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="Avatar"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  user: {
    login: "AyoubSaouidi",
    avatar_url: "https://avatars.githubusercontent.com/u/75161172?v=4",
    html_url: "https://api.github.com/users/AyoubSaouidi",
  },
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
