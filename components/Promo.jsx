import React from "react";
import { BiCabinet, BiCheckShield, BiBriefcase } from "react-icons/bi";

function Promo() {
  return (
    <div className="bg-[#2C2D33]">
      <div className="max-w-[1050px] w-full mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
        <div className="col-span-1 md:col-span-4 border-t-8 md:border-t-0 md:border-l-8 border-blue-500 w-full px-8 py-12 bg-[url('../public/assets/promo_bg_1.jpg')] bg-cover flex ">
          <div className="md:max-w-[60%]">
            <h1 className="text-white text-2xl md:text-4xl  lg:text-5xl pb-4">
              Imovito - це можливість отримати прибуток більший, ніж на
              банківському вкладі
            </h1>
            <p className="text-gray-400">
              Вам доступні найкращі по доходності та надійності об'єкти
              нерухомого майна з розширеною аналітикою та даними по ним.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 border-l-8 border-blue-500 w-full px-8 pt-12 pb-8  bg-[url('../public/assets/promo_bg_2.jpg')] bg-cover">
          <div className="max-w-[70%]">
            <div className="bg-white/70 mb-8 text-blue-500 flex items-center justify-center w-[100px] h-[100px]">
              <BiCabinet size={50} />
            </div>
            <h2 className="text-white pb-4">Уся інформація в одному місці</h2>
            <p className="text-sm text-gray-400">
              Доходність, строк інвестицій, інфраструктурні параметри та багато
              іншого
            </p>
          </div>
        </div>
        <div className="col-span-1 md:border-b-8 border-l-8 md:border-l-0 border-blue-500 w-full px-8 pt-12 pb-8 bg-[url('../public/assets/promo_bg_3.jpg')] bg-cover md:flex flex-col items-center">
          <div className="bg-white/70 mb-8 text-blue-500 flex items-center justify-center w-[100px] h-[100px]">
            <BiCheckShield size={50} />
          </div>
          <h2 className="text-white pb-4 md:text-center">Безпека</h2>
          <p className="text-sm text-gray-400 md:text-center">
            Об'єкти інвестування відібрані, перевірені та надійні
          </p>
        </div>
        <div className="col-span-1 md:border-b-8 border-l-8 md:border-l-0 border-blue-500 w-full px-8 pt-12 pb-8 bg-[url('../public/assets/promo_bg_4.jpg')] bg-cover md:flex flex-col items-center">
          <div className="bg-white/70 mb-8 text-blue-500 flex items-center justify-center w-[100px] h-[100px]">
            <BiBriefcase size={50} />
          </div>
          <h2 className="text-white pb-4 md:text-center">Можливості</h2>
          <p className="text-sm text-gray-400 md:text-center">
            Допомога при оформлені іпотеки
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
