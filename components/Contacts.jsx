import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";

function Contacts() {
  const [amount, setAmount] = useState(60000);

  const handleDecrease = (amount) => {
    if (amount > 30000) setAmount(amount - 10000);
  };

  const handleIncrease = (amount) => {
    setAmount(amount + 10000);
  };

  return (
    <>
      <div className="bg-[#2C2D33]">
        <div className="max-w-[1280px] w-full mx-auto py-16 text-center">
          <h1 className="text-white mb-16">Інвестуй в нерухомість</h1>
          <div className="grid grid-cols-3 mb-24 gap-x-2 justify-center items-center">
            <ol className="col-span-3 flex justify-center items-center w-full mb-8">
              <li className="flex w-full  items-center text-gray-700 text-5xl font-bold after:content-[''] after:w-full after:h-1 after:mx-4 after:border-b-2 after:border-gray-400 after:inline-block">
                <span className="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
                  1
                </span>
              </li>

              <li className="flex w-full  items-center text-gray-700 text-5xl font-bold after:content-[''] after:w-full after:h-1 after:mx-4 after:border-b-2 after:border-gray-400 after:inline-block">
                <span className="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
                  2
                </span>
              </li>
              <li className="flex w-full  items-center text-gray-700 text-5xl font-bold">
                <span className="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
                  3
                </span>
              </li>
            </ol>
            <div className="text-white">
              <h2 className="mb-4">Заповни заявку онлайн</h2>
              <p className="text-gray-500">Це займе менше хвилини</p>
            </div>
            <div className="text-white">
              <h2 className="mb-4">Ми підберемо найкращі об'єкти</h2>
              <p className="text-gray-500">
                Наш інвест-консультант знайде об'єкт/об'єкти, який підійде саме
                під ваші задачі
              </p>
            </div>
            <div className="text-white">
              <h2 className="mb-4">Укладемо договір</h2>
              <p className="text-gray-500">
                Наші юристи підготують усі необхідні документи і потурбуються
                про ваш захист
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1280px] w-full mx-auto py-16 contacts_bg h-[400px]">
          <div className="w-[90%] md:w-[50%] rounded-2xl h-[400px] bg-white mx-auto mt-[-150px] p-8">
            <h2 className="mb-6">Контактна інформація</h2>

            <form>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500">
                  <IoPersonOutline size={22} />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-12 text-sm text-gray-900  rounded-lg shadow-lg shadow-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-100"
                  placeholder="Прізвище, І'мя"
                  required
                />
              </div>
              <div className="relative mb-8 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500">
                  <BiPhoneCall size={22} />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-12 text-sm text-gray-900  rounded-lg shadow-lg shadow-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-100"
                  placeholder="Контактний номер телефону"
                  required
                />
              </div>
              <h2 className="mb-6">Бюджет інвестицій</h2>
              <div className="flex">
                <div
                  role="button"
                  className="w-[80px] h-[60px] bg-gray-100 rounded-lg text-gray-700 text-4xl flex justify-center items-center mr-2"
                  onClick={() => handleDecrease(amount)}
                >
                  -
                </div>
                <div className="w-full flex justify-center items-center bg-gray-100 rounded-lg text-blue-500 text-2xl font-bold">
                  {amount}$
                </div>
                <div
                  role="button"
                  className="w-[80px] h-[60px] bg-gray-100 rounded-lg text-gray-700 text-4xl flex justify-center items-center ml-2"
                  onClick={() => handleIncrease(amount)}
                >
                  +
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
