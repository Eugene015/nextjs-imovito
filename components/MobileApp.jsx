import React from "react";
import { HiOutlineOfficeBuilding, HiOutlineDocumentText } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";
import Image from "next/image";
import googleplay from "@/public/assets/googleplay.png";
import appstore from "@/public/assets/appstore.png";
import mphones from "@/public/assets/mphones.png";

function MobileApp() {
  return (
    <div className="">
      <div className="max-w-[1280px] w-full mx-auto py-16">
        <h1 className="mb-8 text-center md:text-left">
          Інвестувати в нерухомість легко
        </h1>
        <div className="flex w-full mb-24">
          <div>
            <div className="relative my-8 overflow-hidden">
              <div className="border-2 border-dashed border-gray-400 rounded-full w-[100px] h-[100px] text-blue-500 flex items-center justify-center">
                <HiOutlineOfficeBuilding size={50} />
              </div>
              <hr className="absolute left-[100px] top-[50px] border-t-2 border-gray-400 border-dashed w-full"></hr>
            </div>
            <div className="flex gap-4">
              <h2 className="text-blue-500">01</h2>
              <div className="">
                <h2 className="mb-4">Оберіть об'єкт інвестування</h2>
                <p className="text-gray-500">
                  Допоможемо обрати об'єкт із найбільшою інвестиційною
                  привабливістю
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative my-8 overflow-hidden">
              <div className="border-2 border-dashed border-gray-400 rounded-full w-[100px] h-[100px] text-blue-500 flex items-center justify-center">
                <HiOutlineDocumentText size={50} />
              </div>
              <hr className="absolute left-[100px] top-[50px] border-t-2 border-gray-400 border-dashed w-full"></hr>
            </div>
            <div className="flex gap-4">
              <h2 className="text-blue-500">02</h2>
              <div className="">
                <h2 className="mb-4">Заповніть форму зворотнього зв'язку</h2>
                <p className="text-gray-500">
                  Наші косультанти зв'яжуться з вами в найближчий час
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative my-8 overflow-hidden">
              <div className="border-2 border-dashed border-gray-400 rounded-full w-[100px] h-[100px] text-blue-500 flex items-center justify-center">
                <TbHeartHandshake size={50} />
              </div>
            </div>
            <div className="flex gap-4">
              <h2 className="text-blue-500">03</h2>
              <div className="">
                <h2 className="mb-4">Прийміть рішення про співпрацю</h2>
                <p className="text-gray-500">
                  Оформити об'єкт можна як у нас в офісі, так і віддалено
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#007BFF] bg-blend-normal bg-no-repeat bg-right-bottom bg-[url('../public/assets/mphones.png')] flex">
          <div className="p-8 max-w-[50%]">
            <h1 className="text-white mb-4">Застосунок Imovito цим літом</h1>
            <p className="text-gray-100 mb-8">
              Найкращі унікальні інвест-пропозиції у вас в телефоні. Аналітика,
              найкращі пропозиції по житловій, заміській, комерційній та продажу
              земельних ділянок в мобільному застосунку.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={googleplay}
                alt="google play"
                width="204"
                height="59"
              />
              <Image src={appstore} alt="app store" width="204" height="59" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
