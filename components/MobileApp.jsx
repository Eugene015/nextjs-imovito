import React from "react";
import { HiOutlineOfficeBuilding, HiOutlineDocumentText } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";
import Image from "next/image";
import googleplay from "@/public/assets/googleplay.png";
import appstore from "@/public/assets/appstore.png";

function MobileApp() {
  return (
    <div className="max-w-[1050px] w-full mx-auto py-16">
      <h1 className="mb-16 text-center md:text-left">
        Інвестувати в нерухомість легко
      </h1>
      <div className="hidden md:grid md:grid-cols-3 mb-24 gap-x-2">
        <ol className="col-span-3 flex items-center w-full mb-8">
          <li className="flex w-full items-center text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-400 after:inline-block after:border-dashed">
            <span className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0 hover:scale-105">
              <HiOutlineOfficeBuilding size={50} />
            </span>
          </li>

          <li className="flex w-full items-center text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-400 after:inline-block after:border-dashed">
            <span className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0 hover:scale-105">
              <HiOutlineDocumentText size={50} />
            </span>
          </li>
          <li className="flex items-center w-full text-blue-500">
            <span className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full h-[100px] w-[100px] shrink-0 hover:scale-105">
              <TbHeartHandshake size={50} />
            </span>
          </li>
        </ol>

        <div className="flex gap-4">
          <h2 className="text-blue-500">01</h2>
          <div className="">
            <h2 className="mb-4">Оберіть об'єкт інвестування</h2>
            <p className="text-gray-500">
              Допоможемо обрати об'єкт із найбільшою інвестиційною привабливістю
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

      {/* Mobile */}
      <div className="block md:hidden mb-24 mx-16">
        <ol class="relative border-l-2 border-dashed border-gray-400">
          <li class="mb-10 ml-16 sm:ml-20">
            <span class="absolute flex items-center justify-center -left-[50px] border-2 border-dashed border-gray-400 bg-white rounded-full h-[100px] w-[100px] shrink-0 text-blue-500">
              <HiOutlineOfficeBuilding size={50} />
            </span>

            <div className="flex gap-4">
              <h2 className="text-blue-500 hidden sm:block">01</h2>
              <div>
                <h2 className="mb-4 text-black">Оберіть об'єкт інвестування</h2>
                <p className="text-gray-500">
                  Допоможемо обрати об'єкт із найбільшою інвестиційною
                  привабливістю
                </p>
              </div>
            </div>
          </li>
          <li class="mb-10 ml-16 sm:ml-20">
            <span class="absolute flex items-center justify-center -left-[50px] border-2 border-dashed border-gray-400 bg-white rounded-full h-[100px] w-[100px] shrink-0 text-blue-500">
              <HiOutlineDocumentText size={50} />
            </span>

            <div className="flex gap-4">
              <h2 className="text-blue-500 hidden sm:block">02</h2>
              <div>
                <h2 className="mb-4 text-black">
                  Заповніть форму зворотнього зв'язку
                </h2>
                <p className="text-gray-500">
                  Наші косультанти зв'яжуться з вами в найближчий час
                </p>
              </div>
            </div>
          </li>
          <li class="mb-10 ml-16 sm:ml-20">
            <span class="absolute flex items-center justify-center -left-[50px] border-2 border-dashed border-gray-400 bg-white rounded-full h-[100px] w-[100px] shrink-0 text-blue-500">
              <TbHeartHandshake size={50} />
            </span>

            <div className="flex gap-4">
              <h2 className="text-blue-500 hidden sm:block">03</h2>
              <div>
                <h2 className="mb-4 text-black">
                  Прийміть рішення про співпрацю
                </h2>
                <p className="text-gray-500">
                  Оформити об'єкт можна як у нас в офісі, так і віддалено
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div className="w-full bg-[#007BFF] flex flex-col md:flex-row items-center">
        <div className="md:p-8 py-16 lg:max-w-[50%]">
          <h1 className="text-white mb-4 text-center md:text-left">
            Застосунок Imovito цим літом
          </h1>
          <p className="text-gray-100 mb-8 text-center md:text-left">
            Найкращі унікальні інвест-пропозиції у вас в телефоні. Аналітика,
            найкращі пропозиції по житловій, заміській, комерційній та продажу
            земельних ділянок в мобільному застосунку.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              className="mb-4 md:mr-4 md:mb-0 hover:scale-105 cursor-pointer"
              src={googleplay}
              alt="google play"
              width="204"
              height="59"
            />
            <Image
              src={appstore}
              alt="app store"
              width="204"
              height="59"
              className="hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden lg:block content_bg min-h-[420px]"></div>
      </div>
    </div>
  );
}

export default MobileApp;
