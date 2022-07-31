import React from "react";
import {NavLink, Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <nav className='navbar'>
   
    <span className='navbarLink'>
   
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
  <NavLink
    to='/login'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
   LOGIN
  </NavLink>
    <NavLink
    to='/about'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    ABOUT
  </NavLink>


  </span>
</nav>
      <section className="section">
        <Outlet />
      </section>
    </>
  );
}
