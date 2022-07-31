import React, { useState } from "react";
import { data } from "./data.js";
import { groupdatadump } from "./groupdata";
const USER = () => {
  const people = data;
  const [groupUserArray, SetgroupUserArray] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [groupdata, setgroupdata] = useState(groupdatadump);
  const [newgroupdata, setnewgroupdata] = useState({
    id: " ",
    groupname: " ",
    groupUserArray: [],
  });
  const [groupname, setgroupname] = useState("");
  //   console.log(
  //     people.filter((u) => u.firstName.toLowerCase().includes(searchdata))
  //   );
  const add = (id, firstName, email, url) => {
    console.log("add");
    console.log(id, firstName);
    console.log(groupUserArray.findIndex((ele) => ele.id !== id));
    if (groupUserArray.findIndex((ele) => ele.id === id) === -1) {
      // const newPerson = { ...person, id: new Date().getTime().toString() };
      // const add = { id, firstName, email, url };
      groupUserArray.push({ id, firstName, email, url });
      SetgroupUserArray([...groupUserArray]);
      console.log(groupUserArray);
    }
  };
  const removegroupItem = (id) => {
    let newgroupdata = groupdata.filter((ele) => ele.id !== id);
    console.log("newgroupdata");
    console.log(newgroupdata);
    setgroupdata(newgroupdata);
  };
  const removeItem = (id) => {
    let newPeople = groupUserArray.filter((ele) => ele.id !== id);
    SetgroupUserArray(newPeople);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setgroupname(value);
    console.log("groupname");
    console.log(groupname);
  };
  const addGroup = (e) => {
    e.preventDefault();
    const newgroup = {
      id: new Date().getTime().toString(),
      groupname,
      groupUserArray,
    };
    console.log("groupdataaaa");
    console.log(newgroup);
    setgroupdata([...groupdata, newgroup]);
    setnewgroupdata({
      id: " ",
      groupname: " ",
      groupUserArray: [],
    });
    console.log(groupdata);
  };
  return (
    <>
      <div className="clearfix">
        <div className="main">
          <article className="form">
            <form>
              <div className="form-control">
                <label htmlFor="firstName">Search User : </label>
                <input
                  type="text"
                  name="search"
                  placeholder="search...."
                  onChange={(e) => {
                    setsearchdata(e.target.value);
                  }}
                />
              </div>
            </form>
          </article>

          {groupUserArray.map((person) => {
            const { id, url } = person;
            return (
              <span key={id.toString()}>
                <span className="addperson">
                  <img src={url} alt={url} className=""></img>
                </span>
                <span className="x" onClick={() => removeItem(id)}>
                  X
                </span>
              </span>
            );
          })}

          <article className="form groupForm ">
            <form>
              <div className="form-control">
                <label htmlFor="GroupName">Group Name : </label>
                <input
                  type="text"
                  id="GroupName"
                  onChange={handleChange}
                  name="GroupName"
                />
              </div>
              <button type="submit" className="btn" onClick={addGroup}>
                Add Group
              </button>
            </form>
          </article>

          <article>
            {people
              .filter((person) =>
                person.firstName
                  .toLowerCase()
                  .includes(searchdata.toLowerCase())
              )
              .map((person) => {
                const { id, firstName, email, url } = person;
                return (
                  <div key={id} className="item">
                    <h4>{firstName}</h4>
                    <p className="paragraph">{email}</p>
                    <div className="person">
                      <img src={url} alt={url} className=""></img>
                      <button onClick={() => add(id, firstName, email, url)}>
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
          </article>
        </div>

        <div className="group">
          {groupdata.map((group) => {
            const groupName = group.groupname;
            const gid = group.id;
            console.log("groud id");
            console.log(group.id);
            console.log(group.groupname);
            return (
              <div key={gid} className="item">
                <h4>{groupName}</h4>
                <button onClick={() => removegroupItem(gid)}>remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default USER;
