import React from "react";

function Card(props) {
  return (
    <div>
      <img src={props.avatar} alt="Staff" />
      <h4>{props.name}</h4>
      <p>
        <b>Description:</b> {props.description}
      </p>
    </div>
  );
}

export default Card;
