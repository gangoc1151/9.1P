import React from "react";
import faker from "faker";

function Cover() {
  return (
    <div>
      <img
        className="Image_cover"
        src={faker.image.nature()}
        alt="My name Cover"
      />
    </div>
  );
}

export default Cover;
