import React from "react";
import { HiOutlineOfficeBuilding, HiOutlineDocumentText } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";
import Image from "next/image";
import googleplay from "@/public/assets/googleplay.png";
import appstore from "@/public/assets/appstore.png";

function MobileApp() {
  return (
    <div className="">
      <div className="max-w-[1280px] w-full mx-auto py-16">
        <h1 className="mb-16 text-center md:text-left">
          Інвестувати в нерухомість легко
        </h1>
        <div className="grid grid-cols-3 mb-24 gap-x-2">
          <ol class="col-span-3 flex items-center w-full mb-8">
            <li class="flex w-full items-center text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-400 after:inline-block after:border-dashed">
              <span class="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0">
                <HiOutlineOfficeBuilding size={50} />
              </span>
            </li>

            <li class="flex w-full items-center text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-400 after:inline-block after:border-dashed">
              <span class="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0">
                <HiOutlineDocumentText size={50} />
              </span>
            </li>
            <li class="flex items-center w-full text-blue-500">
              <span class="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0">
                <TbHeartHandshake size={50} />
              </span>
            </li>
          </ol>

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
          <div className="flex gap-4">
            <h2 className="text-blue-500">02</h2>
            <div className="">
              <h2 className="mb-4">Заповніть форму зворотнього зв'язку</h2>
              <p className="text-gray-500">
                Наші косультанти зв'яжуться з вами в найближчий час
              </p>
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

        <div className="w-full bg-[#007BFF] flex flex-col md:flex-row items-center">
          <div className="md:p-8 py-16 max-w-[50%]">
            <h1 className="text-white mb-4 text-center md:text-left">
              Застосунок Imovito цим літом
            </h1>
            <p className="text-gray-100 mb-8 text-center md:text-left">
              Найкращі унікальні інвест-пропозиції у вас в телефоні. Аналітика,
              найкращі пропозиції по житловій, заміській, комерційній та продажу
              земельних ділянок в мобільному застосунку.
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                className="mb-4 md:mr-4 md:mb-0"
                src={googleplay}
                alt="google play"
                width="204"
                height="59"
              />
              <Image src={appstore} alt="app store" width="204" height="59" />
            </div>
          </div>
          <div className="content_bg w-full h-[350px]"></div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
