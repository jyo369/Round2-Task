import React, { useState } from "react";

export default function Search({ groupdata, updateChange, people, uname }) {
  const [searchdata, setsearchdata] = useState("");
  return (
    <>
      <article>
        <div className="item-chat form-chat">
          <input
            type="text"
            name="search"
            placeholder="search...."
            onChange={(e) => {
              setsearchdata(e.target.value);
            }}
          />
        </div>
      </article>
      <article>
        {groupdata
          .filter((group) =>
            group.groupname
              .toLocaleUpperCase()
              .includes(searchdata.toLocaleUpperCase())
          )
          .map((group) => {
            const groupName = group.groupname;
            const id = group.id;
            console.log("data");
            console.log(group);
            console.log(group.groupname);
            console.log(group.id);
            return (
              <div
                key={id.toString}
                className="items1"
                onDoubleClick={() => updateChange(groupName, id, true)}
              >
                <h4>{groupName}</h4>
              </div>
            );
          })}
        {people
          .filter(
            (person) =>
              person.firstName.toLocaleUpperCase() !== uname.toLocaleUpperCase()
          )
          .filter((person) =>
            person.firstName
              .toLocaleUpperCase()
              .includes(searchdata.toLocaleUpperCase())
          )
          .map((person) => {
            const { id, firstName, email, url } = person;
            return (
              <div
                key={id.toString()}
                className="items1"
                onDoubleClick={() => updateChange(id, firstName, false)}
              >
                <h4>{firstName}</h4>
                <p>{email}</p>
                <div className="person">
                  <img src={url} alt={url} className=""></img>
                </div>
              </div>
            );
          })}
      </article>
    </>
  );
}
