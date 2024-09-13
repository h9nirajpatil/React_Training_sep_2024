import React, { useState } from "react";

const Handlingevent = () => {
  const [inputValue, setInputValue] = useState("");

  const handInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submit value : ${inputValue}`);
  };

  return (
    <div>
      <h2>handling event in react </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Something...."
          value={inputValue}
          onChange={handInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current Input : {inputValue} </p>
    </div>
  );
};

export default Handlingevent;
