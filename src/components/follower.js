import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login}></img>
      <h2>{login}</h2>
      <a href={html_url} className="btn">
        view profile{" "}
      </a>
    </article>
  );
};

export default Follower;
