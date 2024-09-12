import React from "react";

const CPage = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Accessing the props passed from parencomponent */}
      <p>{props.message}</p>
      <p>User Name : {props.user.name}</p>
      <p>User Age : {props.user.age}</p>
    </div>
  );
};

export default CPage;
