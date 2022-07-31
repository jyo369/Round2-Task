import { Link } from "react-router-dom";
import React from "react";
const About = () => {
  const data = `Technical Assignment Task:
  Build a simple application which provides web services to facilitate group chat and manage data.
  Admin APIs (only admin can add users)
  - Manage Users (create user, edit user)
  Any User (normal user, admin user) –
  Authentication APIs (login, logout)
  Groups (Normal User) –
  Manage groups (create, delete, search and add members, etc). All users are visible to all users.
  Group Messages (Normal User)
  - Send messages in group
  - Likes message, etc`;
  return (
    <>
      <div>
        <h2>About Page</h2>
        <Link to="/about">About</Link>
      </div>
      <div className="container">{data}</div>
    </>
  );
};
export default About;
