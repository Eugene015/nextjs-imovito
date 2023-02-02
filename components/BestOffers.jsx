import React from "react";
import MainCarousel from "./ui/MainCarousel";

function BestOffers() {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-[1050px] w-full py-16 mx-4 lg:mx-auto">
        <h1 className="mb-2 text-center md:text-left mx-4 md:mx-0">
          Наші кращі інвестиційні пропозиції
        </h1>
        <p className="text-center md:text-left">
          Ми відібрали, перевірили та розрахували прибутковість кожного об'єкту
        </p>
        <div className="py-12 overflow-hidden">
          <MainCarousel />
        </div>
        <div className="text-center">
          <button className="text-white border border-blue-500 bg-blue-500  hover:text-gray-600 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2">
            Переглянути всі об'єкти
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestOffers;
