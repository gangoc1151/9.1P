import React from "react";

import Card from "./Card";
import cardlist from "./cardlist";

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
      <div>{cardlist.map(cardcomponent)}</div>
    </div>
  );
}

export default CardList;
