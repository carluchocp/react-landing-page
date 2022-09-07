import { element } from "prop-types";
import React from "react";
import { Card } from "./card.jsx";

export const GroupOfCards = (props) => {
    const {cardData} = props
    const cards = cardData.map(
        (element, index) => 
        <Card key={index} title={element.title} image={element.image} description={element.description}/>
    );
    return(
        <div className="card-group">
            {cards}
        </div>
    );
}