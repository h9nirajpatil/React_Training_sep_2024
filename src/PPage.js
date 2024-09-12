import React from "react";
import CPage from "./CPage";

const PPage = () => {
  const message = "Hello from Parent!";
  const user = { name: "Ganesh", age: 30 };
  return (
    <div>
          <h1>Parent Component</h1>
          {/* passing message and user object as props to childcomponent */}
      <CPage message={message} user={user} />
    </div>
  );
};

export default PPage;
