import React, { useState } from "react";
import UpdateC from "./UpdateC";

function UpdateParentComponent() {
  // using usestate to message the state
  const [message, setMessage] = useState("Hello from Parent!");
  const user = { name: "Ramesh", age: 25 };

  // fuction to update the message
  const updateMessage = () => {
    setMessage("Message updated from Parent!");
  };
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing message and user user object as props to childcomponent. */}
          <UpdateC message={message} user={user} />
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default UpdateParentComponent;
