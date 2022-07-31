import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <>
      <nav className="navbar">
        <span className="navbarLink">
          <p>
            Hello <span>{user.name}</span>
          </p>
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
