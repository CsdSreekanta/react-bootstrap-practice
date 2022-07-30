import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const cards = [
        {id: 1, name: 'laptop pro', price: 1000},
        {id: 2, name: 'laptop crow', price: 1000},
        {id: 3, name: 'laptop grow', price: 1000},
    ]
    return (
        <CardGroup>
        {
        cards.map(card=> <Card2
        key={card.id}
        card={card}
        ></Card2>)
     }

    </CardGroup>
    );
};

export default CardGroup2;