import React from "react";
import Image from "next/image";
import { re_hview } from "@/public/assets/re_hview.png";

function ItemCard() {
  return (
    <div className="max-w-[300px] relative border border-gray-100 rounded-md">
      <div className="">
        <Image src={re_hview} alt="real estate" width="310" height="150" />
      </div>
    </div>
  );
}

export default ItemCard;
