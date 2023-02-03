import React from "react";
import Image from "next/image";

function ItemCard({ image, ...offersData }) {
  console.log(offersData);
  return (
    <div className="flex">
      <div className="max-w-[300px] border border-gray-200 rounded-md shadow-sm shadow-gray-200 mr-4">
        <Image src={image} alt="real estate" width="310" height="150" />
        <div className="p-4">
          <h3 className="mb-4">ЖК &quot;{offersData.offersData.title}&quot;</h3>
          <div className="flex gap-4 mb-4">
            <div>
              <p className="text-xs font-bold text-blue-500 mb-1">Доходність</p>
              <p className="font-bold">{offersData.offersData.yield}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-500 mb-1">Строки</p>
              <p className="font-bold">{offersData.offersData.period}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-500 mb-1">Ризики</p>
              <p className="font-bold">{offersData.offersData.risks}</p>
            </div>
          </div>

          <h3 className="text-blue-500 font-bold">
            {offersData.offersData.totalPrice}
          </h3>
          <p className="text-xs text-gray-400">
            {" "}
            {offersData.offersData.pricePerSqMeter}
            <sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
