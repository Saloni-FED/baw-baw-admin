"use client"
import React from "react";
import Card from "../Card";
import shake from "../../public/Dashboard.png";
import up from "../../public/up.png";
import service from "../../public/services.png";
import user from "/users.png";
import downt from "../../public/downt.png";
import dollar from "../../public/dollar-sign.png";
import GradientBarChart from "../GradientBarChart";
import Map from "../Map";
import SpiderChart from "../SpiderChart";

import LineGraph from "../LineGraph";
import BarGraph from "../BarGraph"
// import PieCharts from "../PieCharts"

const DashBoard = () => {
  const data = [
    {
      vendor1: "Total Vendors",
      num_vendor1: "600",
      vendor2: "New Vendors",
      num_vendor2: "150",
      img1: shake,
      img2: up,
    },
    {
      vendor1: "Total Orders",
      num_vendor1: "120",
      vendor2: "Active Orders",
      num_vendor2: "5",
      img1: service,
      img2: up,
    },
    {
      vendor1: "Total Buyers",
      num_vendor1: "120",
      vendor2: "Products",
      num_vendor2: "5",
      img1: user,
      img2: downt,
    },
    {
      vendor1: "Net Income",
      num_vendor1: "Rs. 67584",
      vendor2: "Monthly Income",
      num_vendor2: "Rs. 5678",
      img1: dollar,
      img2: downt,
    },
    {
      vendor1: "Avg Order Value",
      num_vendor1: "Rs. 675",
      vendor2: "Orders Completed",
      num_vendor2: "6576",
      img1: shake,
      img2: up,
    },
  ];

  return (
    <div className="max-lg:py-5 w-full">
      <div>
        <ul className="flex md:gap-6 text-baw-baw-g4 cursor-pointer">
          <li>Last 24 hours</li>
          <li>Last Week</li>
          <li>Last Month</li>
          <li>Last Year</li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-4 mt-10">
        <div className="w-full flex lg:justify-between justify-around items-center gap-10 lg:gap-5 max-lg:flex-col">
          {data.map((item, index) => (
            <Card
              key={index}
              vendor1={item.vendor1}
              num_vendor1={item.num_vendor1}
              vendor2={item.vendor2}
              num_vendor2={item.num_vendor2}
              img1={item.img1}
              img2={item.img2}
            />
          ))}
        </div>
      </div>
      <div className=" w-full flex max-lg:flex-col lg:justify-between justify-around items-center gap-4 lg:gap-5 mt-5">
        <GradientBarChart
          head="Revenue"
          count="90"
          Icon={true}
          darkColor="#E57373"
          lightColor="#DFA5A5"
        />

        <GradientBarChart
          head="Total Users"
          count="7000"
          Icon={false}
          darkColor="#FFEB3B"
          lightColor="#EFE16C"
        />
        <SpiderChart />

        <Map />
        <LineGraph />
      </div>
      <div className=" w-full flex  lg:justify-between justify-around items-center gap-4 lg:gap-5 mt-5 max-lg:flex-col">
         <BarGraph/>
      </div>
    </div>
  );
};

export default DashBoard;
