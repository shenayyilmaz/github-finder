import React, { Component } from "react";
import PropTypes from "prop-types";

import UserItem from "../usersItem/UserItem";
import Spinner from "../spinner/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyles}>
        {users.map((user) => (
          <div>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    );
  }
};

Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const usersStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
