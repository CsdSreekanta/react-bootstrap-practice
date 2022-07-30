import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {

    const cards = [
        {id: 1, name: 'laptop pro', price: 1000},
        {id: 2, name: 'laptop crow', price: 1000},
        {id: 3, name: 'laptop grow', price: 1000},
    ]
  return (
    <div className="card-group">
    
     {
        cards.map(card=> <Card
        key={card.id}
        card={card}
        ></Card>)
     }

    </div>
  );
};

export default CardGroup;
