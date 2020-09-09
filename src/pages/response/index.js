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
      <div className="response__img">
        <img src={response.image} alt="chuck norris icon" />
      </div>
    </div>
  );
};

export default Response;
