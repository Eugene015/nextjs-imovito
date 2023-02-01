import React from "react";
import ItemCard from "./ui/ItemCard";
import MainCarousel from "./ui/MainCarousel";

function BestOffers() {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-[1050px] w-full mx-auto py-16">
        <h1 className="mb-2 text-center md:text-left">
          Наші кращі інвестиційні пропозиції
        </h1>
        <p className="text-center md:text-left">
          Ми відібрали, перевірили та розрахували прибутковість кожного об'єкту
        </p>
        <div className="py-12 max-w-[1050px] mx-auto relative">
          <MainCarousel>
            <ItemCard />
          </MainCarousel>
        </div>
        <div className="text-center">
          <button className="text-white border border-blue-500 bg-blue-500  focus:ring-4 hover:text-gray-600 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2">
            Переглянути всі об'єкти
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestOffers;
