/** @format */

import React from "react";

import {
  MdPayment,MdDashboardCustomize

} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";

const Dashboard = () => {
  const card = [
    {
      progress: "bg-blue-400",
      title: "Total Sells",
      number: "$3799.00",
      icon: (
       <MdPayment className="text-2xl text-[rgb(240,72,88)]" />
      ),
      bg: "#ff5370",
    },
    {
      progress: "bg-green-400",
      title: "All Order",
      number: "578",
      icon:<i className="fa-solid fa-bag-shopping text-2xl" style={{color : '#4099ff'}} ></i>,
      bg: "#4099ff",
    },
    {
      progress: "bg-green-400",
      title: "All Users",
      number: "578",
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
    },
    {
      progress: "bg-green-400",
      title: "All Category",
      number: "200",
      icon: <MdDashboardCustomize className="text-2xl text-[#3c335d]" />,
      bg: "#3c335d",
    },
    {
      progress: "bg-green-400",
      title: "All products",
      number: "100",
      icon: <t className="text-2xl text-[#64878e]" />,
      bg: "#64878e",
    },

  ];
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{ backgroundColor: `${card.bg}` , textTransform : 'uppercase'}}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div
                  className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn"
              
                >
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
