import React, { useState } from "react";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h1>Coditional Rendering Example</h1>
      {isLoggedIn ? <p>Welcome Back, Ganesh!</p> : <p>Pleae log in.</p>}
      <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
};

export default Conditional;
