import React from "react";
import Admin from "./Admin";
import Navbar from "./Navbar";
const Admindashboard = ({ user }) => {
  return (
    <>
      <nav className="PortalBar">
        <strong>ADMIN Portal</strong>
        <Navbar user={user} />
      </nav>
      <Admin />
    </>
  );
};
export default Admindashboard;
