import React, { useState } from "react";
import { BiPhoneCall, BiMinus, BiPlus } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

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
        <div className="max-w-[1050px] w-full mx-auto py-16">
          <h1 className="text-white mb-16 text-center">
            Інвестуй в нерухомість легко
          </h1>
          <div className="hidden md:grid md:grid-cols-3 mb-24 gap-2">
            <ol className="col-span-1 md:col-span-3 flex justify-center items-center w-full mb-8">
              <li className="flex w-full items-center text-gray-700 text-5xl font-bold after:content-[''] after:w-full after:h-1 after:mx-4 after:border-b-2 after:border-gray-400 after:inline-block">
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

          {/* Mobile */}
          <div className="md:hidden grid grid-cols-1 mb-24 mx-16 gap-2">
            <ol className="relative border-l-2 border-gray-400 w-full mb-8">
              <li className="w-full text-gray-700 text-5xl font-bold mb-16">
                <div className="flex items-center justify-center border-4 border-[#2C2D33]  rounded-2xl bg-white h-[100px] w-[100px] shrink-0 absolute -left-[50px]">
                  1
                </div>
                <div className="text-white ml-24">
                  <h2 className="mb-4">Заповни заявку онлайн</h2>
                  <p className="text-gray-500 text-base font-normal">
                    Це займе менше хвилини
                  </p>
                </div>
              </li>

              <li className="w-full text-gray-700 text-5xl font-bold mb-16">
                <div className="flex items-center justify-center border-4 border-[#2C2D33] rounded-2xl bg-white h-[100px] w-[100px] shrink-0 absolute -left-[50px]">
                  2
                </div>
                <div className="text-white ml-24">
                  <h2 className="mb-4">Ми підберемо найкращі об'єкти</h2>
                  <p className="text-gray-500 text-base font-normal">
                    Наш інвест-консультант знайде об'єкт/об'єкти, який підійде
                    саме під ваші задачі
                  </p>
                </div>
              </li>
              <li className="w-full text-gray-700 text-5xl font-bold mb-16">
                <div className="flex items-center justify-center border-4 border-[#2C2D33] rounded-2xl bg-white h-[100px] w-[100px] shrink-0 absolute -left-[50px]">
                  3
                </div>
                <div className="text-white ml-24">
                  <h2 className="mb-4">Укладемо договір</h2>
                  <p className="text-gray-500 text-base font-normal">
                    Наші юристи підготують усі необхідні документи і
                    потурбуються про ваш захист
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1050px] w-full mx-auto py-16 contacts_bg">
          <div className="w-[90%] md:w-[50%] rounded-2xl bg-white mx-auto mt-[-150px] p-8">
            <h2 className="mb-6">Контактна інформація</h2>

            <form type="submit">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500 font-bold">
                  <BsPerson size={22} />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-12 text-sm text-gray-900  rounded-lg shadow-lg shadow-gray-100 focus:border focus:ring-blue-500 focus:border-blue-200 outline-none bg-gray-100"
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
                  className="block w-full p-4 pl-12 text-sm text-gray-900  rounded-lg shadow-lg shadow-gray-100 focus:border focus:ring-blue-500 focus:border-blue-200 outline-none bg-gray-100"
                  placeholder="Контактний номер телефону"
                  required
                />
              </div>
              <h2 className="mb-6">Бюджет інвестицій</h2>
              <div className="flex mb-4">
                <div
                  role="button"
                  className="w-[80px] h-[60px] bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-3xl flex justify-center items-center mr-2 transition-all duration-300 ease-in"
                  onClick={() => handleDecrease(amount)}
                >
                  <BiMinus />
                </div>
                <div className="w-full flex justify-center items-center bg-gray-100 rounded-lg text-blue-500 text-2xl font-bold">
                  {amount}$
                </div>
                <div
                  role="button"
                  className="w-[80px] h-[60px] bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-3xl flex justify-center items-center ml-2 transition-all duration-300 ease-in"
                  onClick={() => handleIncrease(amount)}
                >
                  <BiPlus />
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white border border-blue-500 bg-blue-500  focus:ring-4 hover:text-gray-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 p-4"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
