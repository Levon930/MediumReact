import React from "react";

const BackEndErrorMessages = ({ backEndErrors }) => {
  const Errors = Object.keys(backEndErrors).map((name) => {
    const messages = backEndErrors[name].join("");
    return `${name}:${messages}`;
  });
  console.log("render");
  return (
    <ul className="error-messages">
      {Errors.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};
export default BackEndErrorMessages;
