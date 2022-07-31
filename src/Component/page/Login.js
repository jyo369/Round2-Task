import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
const Login = ({ setUser, userdata }) => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  // setPeople((prevState) => {
  //   const newState = prevState.map((obj) => {
  //     if (obj.id === objid) {
  //       return {
  //         ...obj,
  //         firstName: person.firstName,
  //         email: person.email,
  //         url: person.url,
  //       };
  //     }

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    const available = userdata.findIndex((obj) => obj.firstName === name);
    console.log(available);
    if (!name || !password) return;
    setUser({ name: name, password: password });
    if (name.toUpperCase() === "ADMIN") {
      navigate("/admin-dashboard");
    } else if (available !== -1) {
      navigate("/dashboard/chat");
    } else {
      seterror(true);
    }
  };
  return (
    <section className="sectionLogin">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div className="form-control">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
        {error ? <p>Invalid username and password</p> : ""}
      </form>
    </section>
  );
};
export default Login;
