import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import data from "../../data/data";
export default function Navbar({ user }) {
  const available = data.findIndex((obj) => obj.firstName === user.name);
  const url = data[available].url;
  console.log(url);
  return (
    <>
      <nav className="navbar">
        <span className="navbarLink">
          <p>
            Hello <span>{user.name}</span>
            <span className="addperson">
              <img src={url} alt={user.url}></img>
            </span>
          </p>
          <NavLink
            to="/dashboard/chat"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Chat Messager
          </NavLink>
          {/* <NavLink
            to="/dashboard/chat"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Group
          </NavLink> */}
          <NavLink
            to="/dashboard/group"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Group
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            LOGOUT
          </NavLink>
        </span>
      </nav>
      <section className="section">
        <Outlet />
      </section>
    </>
  );
}
