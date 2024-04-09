import React from "react";
import cards from "./findresources";

function FindResourcesComponent() {
    return (
      <div className="resources">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <img src={card.img} alt={card.title} />
            <p>{card.text}</p>
            <a href={equitylink/equityapp/src/img/Resources.jpg}>Learn More</a>
          </div>
        ))}
      </div>
    );
  }
  
  export default FindResourcesComponent;