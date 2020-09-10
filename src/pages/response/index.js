import React from "react";
import { useHistory } from "react-router-dom";
import "./response.scss";

// Components
import { useResponse } from "../../components/ResponseContext";

const Response = () => {
  const history = useHistory();
  const response = useResponse();
  if (!response) {
    history.replace("/");
    return null;
  }

  return (
    <div className="response">
      <div className="response__text">{response.value}</div>
      <img className="response__img" src={response.image} alt={response.type} />
    </div>
  );
};

export default Response;
