import React from "react";
import User from "./User";
import Chat from "./Chat";
import Navbar from "./Navbar";
const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <nav className="PortalBar">
        <strong>User Portal</strong>
        <Navbar user={user} />
      </nav>
      <Chat user={user} />
    </>
  );
};
export default Dashboard;
