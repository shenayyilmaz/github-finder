import React from "react";
import PropTypes from "prop-types";
import RepoItem from "../repo-item/RepoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.prototype = {
  repos: PropTypes.object.isRequired,
};
export default Repos;
