import React, { useState } from "react";
import { useContext } from "react";
import { data } from "./data.js";
const cxt = React.createContext();
const Admin = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", url: "" });
  const [people, setPeople] = useState(data);
  const [edit, setEdit] = useState(false);
  //change detection call
  const [objid, setobjid] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  //gather user details
  const updateChange = (id, firstName, email, url) => {
    setPerson({ firstName, email, url });
    setEdit(true);
    setobjid(id);
  };
  //remove item from list
  const removeItem = (id) => {
    let newPeople = people.filter((ele) => ele.id !== id);
    setPeople(newPeople);
  };

  //add users
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.url) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", url: "" });
    }
  };
  //add button  function call
  const editSubmit = (e) => {
    e.preventDefault();
    setPeople((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === objid) {
          return {
            ...obj,
            firstName: person.firstName,
            email: person.email,
            url: person.url,
          };
        }
        setEdit(false);
        setPerson({ firstName: "", email: "", url: "" });
        return obj;
      });
      setEdit(false);
      setPerson({ firstName: "", email: "", url: "" });
      return newState;
    });
  };

  return (
    <>
      <cxt.Provider
        value={{ handleChange, edit, editSubmit, handleSubmit, person, people }}
      >
        <div className="main">
          <AddUser></AddUser>
          <article>
            {people.map((person) => {
              const { id, firstName, email, url } = person;
              return (
                <div
                  key={id.toString()}
                  className="items"
                  onDoubleClick={() => updateChange(id, firstName, email, url)}
                >
                  <h4>{firstName}</h4>
                  <p>{email}</p>
                  <div className="person">
                    <img src={url} alt={url} className=""></img>
                    <button onClick={() => removeItem(id)}>remove</button>
                  </div>
                </div>
              );
            })}

            <button className="delebtn" onClick={() => setPeople([])}>
              Delete All Users
            </button>
          </article>
        </div>
      </cxt.Provider>
    </>
  );
};

const AddUser = () => {
  const context = useContext(cxt);
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={context.person.firstName}
              onChange={context.handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={context.person.email}
              onChange={context.handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Img Url : </label>
            <input
              type="text"
              id="url"
              name="url"
              value={context.person.url}
              onChange={context.handleChange}
            />
          </div>
          {context.edit ? (
            <button type="submit" className="btn" onClick={context.editSubmit}>
              Edit
            </button>
          ) : (
            <button
              type="submit"
              className="btn"
              onClick={context.handleSubmit}
            >
              Add
            </button>
          )}
        </form>
      </article>
      ;
    </>
  );
};

export default Admin;
