import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return <div>{repo.name}</div>;
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
