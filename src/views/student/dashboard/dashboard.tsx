import React from "react";
import { CardInfo } from "../../../components";
import ReactApexChart from "react-apexcharts";

export function Dashboard() {
  const allCard = [
    {
      title: "Meilleure moyenne",
      cardValue: 15,

      icon: <i className="fa-solid fa-users fa-xl"></i>,
    },
    {
      title: "Score TOEIC",
      cardValue: 700,

      icon: <i className="fa-solid fa-users fa-xl"></i>,
    },
    {
      title: "moyenne en conduite",
      cardValue: 18,

      icon: <i className="fa-solid fa-users fa-xl"></i>,
    },
  ];

  const chartOptions = {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Moyenne de l'étudiant",
        data: [14, 15, 13],
      },
    ],
    xaxis: {
      categories: ["Année 1", "Année 2", "Année 3"],
    },
  };

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

      <div className="row">
        <div className="col-md-6 col-lg-8">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <h4 className="card-title mb-0">Evolution de la moyenne</h4>
              </div>

              <div className="pl-4 mb-5">
                <ReactApexChart
                  //@ts-ignore
                  options={chartOptions}
                  series={chartOptions.series}
                  type="line"
                  height={350}
                />
              </div>
            </div>
        
          </div>
        </div>

        <div className="col-md-6 col-lg-4 ">
        <div className="card h-100">
            <div className="card-body">
              
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
