import React, { useState, useContext, Fragment } from "react";
// Contexts
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // GITHUB Context
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;

  // Alert Context
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <Fragment>
          <hr
            style={{
              width: "80%",
              color: "rgba(100,100,100,0.2)",
              display: "block",
              margin: "auto",
              marginBlock: "1rem",
            }}
          />
          <button
            className="btn btn-light btn-block"
            style={{ marginBlockEnd: "1.5rem" }}
            onClick={clearUsers}
          >
            Clear
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Search;
