import React from "react";

function UpdateChildComponent({ message, user }) {
  return (
    <div>
      <h2>Update child component </h2>
      <p>{message}</p>
      <p>User Name : {user.name}</p>
      <p>User Age : {user.age}</p>
    </div>
  );
}
export default UpdateChildComponent;
