import React from "react";
import Image from "next/image";
import re_hview from "@/public/assets/re_hview.png";

function ItemCard() {
  return (
    <div className="max-w-[300px] border border-gray-200 rounded-md shadow-sm shadow-gray-200 mr-4">
      <Image src={re_hview} alt="real estate" width="310" height="150" />
      <div className="p-4">
        <h3 className="mb-4">ЖК "Столичне місто"</h3>
        <div className="flex gap-4 mb-4">
          <div>
            <p className="text-xs font-bold text-blue-500 mb-1">Доходність</p>
            <p className="font-bold">15%</p>
          </div>
          <div>
            <p className="text-xs font-bold text-blue-500 mb-1">Строки</p>
            <p className="font-bold">1 рік</p>
          </div>
          <div>
            <p className="text-xs font-bold text-blue-500 mb-1">Ризики</p>
            <p className="font-bold">5%</p>
          </div>
        </div>

        <h3 className="text-blue-500 font-bold">від $62150</h3>
        <p className="text-xs text-gray-400">
          {" "}
          від $1599/м<sup>2</sup>
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
