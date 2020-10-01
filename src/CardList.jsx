import React from "react";

import Card from "./Card";
import stafflist from "./stafflist";
function cardcomponent(staff, i) {
  return (
    <div className="cardlist">
      <div className="Card">
        <Card
          avatar={staff.avatar}
          name={staff.name}
          description={staff.description}
        />
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div>
      <div>{stafflist.map(cardcomponent)}</div>
    </div>
  );
}

export default CardList;
