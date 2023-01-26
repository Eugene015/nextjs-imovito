import React from "react";
import ItemCard from "./ui/ItemCard";

function BestOffers() {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-[1280px] w-full mx-auto py-16">
        <h1 className="mb-2">Наші кращі інвестиційні пропозиції</h1>
        <p>
          Ми відібрали, перевірили та розрахували прибутковість кожного об'єкту
        </p>
        <div className="flex justify-between items-center py-12 gap-6">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className="text-center">
          <button className="text-white bg-blue-500  focus:ring-4 hover:text-gray-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2">
            Переглянути всі об'єкти
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestOffers;
