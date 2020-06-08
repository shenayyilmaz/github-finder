import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("PLEASE ENTER SOMETHING", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" onChange={onChange} value={text} />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button onClick={clearUsers} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
