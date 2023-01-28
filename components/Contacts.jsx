import React from "react";
import { IoPersonOutline } from "react-icons/io";

function Contacts() {
  return (
    <>
      <div className="bg-[#2C2D33]">
        <div className="max-w-[1280px] w-full mx-auto py-16 text-center">
          <h1 className="text-white mb-16">Інвестуй в нерухомість</h1>
          <div className="grid grid-cols-3 mb-24 gap-x-2 justify-center items-center">
            <ol class="col-span-3 flex justify-center items-center w-full mb-8">
              <li class="flex w-full  items-center text-gray-700 text-5xl font-bold after:content-[''] after:w-full after:h-1 after:mx-4 after:border-b-2 after:border-gray-400 after:inline-block">
                <span class="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
                  1
                </span>
              </li>

              <li class="flex w-full  items-center text-gray-700 text-5xl font-bold after:content-[''] after:w-full after:h-1 after:mx-4 after:border-b-2 after:border-gray-400 after:inline-block">
                <span class="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
                  2
                </span>
              </li>
              <li class="flex w-full  items-center text-gray-700 text-5xl font-bold">
                <span class="flex items-center justify-center  border-dashed border-gray-400 rounded-2xl bg-white h-[100px] w-[100px] shrink-0">
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
          <div className="w-[50%] rounded-2xl h-[400px] bg-white mx-auto mt-[-150px] p-8">
            <h2 className="mb-6">Контактна інформація</h2>
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoPersonOutline />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-full shadow-lg shadow-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Пошук..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-500  focus:ring-4 hover:text-gray-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2"
                >
                  Пошук
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
