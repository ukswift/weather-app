import React from "react";

export const ErrorMsg = ({ msg }) => {
  return (
    <div className="errorContainer">
      <h1>{msg}</h1>
    </div>
  );
};
