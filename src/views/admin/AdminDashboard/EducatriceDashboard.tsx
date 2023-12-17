import React from "react";
import { CardInfo } from "../../../components";

export function EducatriceDashboard() {
  const allCard = [
    {
      title: "Nombre d'etudiant",
      cardValue: 15,

      icon: <i className="fa-solid fa-users fa-xl"></i>,
    },
    {
        title: "Licence 1",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
      {
        title: "Licence 2",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
      {
        title: "Licence 3",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
      {
        title: "Master 1",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
      {
        title: "Master 2",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
      {
        title: "Licence 1",
        cardValue: 15,
        icon: <i className="fa-solid fa-users fa-xl"></i>,
      },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {allCard.map((card, index) => {
          return (
            <CardInfo
              key={index}
              title={card.title}
              value={card.cardValue}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
