import React, { useState } from "react";

const Count = () => {
  //usestate hook to manage state
  const [count, setCount] = useState(0);

  const Incrementcount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>State Example</h1>
      <p>Current Count : {count} </p>
      <button onClick={Incrementcount}>Increment</button>
    </div>
  );
};

export default Count;
