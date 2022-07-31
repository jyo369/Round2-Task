import React from "react";
import User from "./User";
import Navbar from "./Navbar";

const Groupdashboard = ({ user }) => {
  return (
    <>
      <nav className="PortalBar">
        <strong>User Portal</strong>
        <Navbar user={user} />
      </nav>

      <User user={user} />
    </>
  );
};
export default Groupdashboard;
