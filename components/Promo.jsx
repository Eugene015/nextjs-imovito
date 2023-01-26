import React from "react";

function Promo() {
  return (
    <div className="bg-[#2C2D33]">
      <div className="max-w-[1280px] w-full mx-auto py-16 grid grid-cols-4">
        <div className="col-span-4 border-l-8 border-blue-500 w-full px-8 py-4">
          <h1 className="text-white pb-4">
            Imovito - це можливість отримати прибуток більший, ніж на
            банківському вкладі
          </h1>
          <p className="">
            Вам доступні найкращі по доходності та надійності об'єкти нерухомого
            майна з розширеною аналітикою та даними по ним
          </p>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Promo;
