import React from "react";
import ItemCard from "./ui/ItemCard";

function Main() {
  return (
    <div className="max-w-[960px] w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-16 justify-center items-center mx-auto">
      <div className="col-span-1 md:col-span-2">
        <h1 className="mb-6">
          Imovito - платформа для інвестицій в нерухомість
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          Доходність до 35%, низькі ризики, об`єктивна аналітика
        </p>
        <div className="flex flex-wrap mb-4 items-center">
          <button className="mr-4 rounded-sm font-bold text-sm">Всі</button>
          <p className="mr-4 font-bold text-sm">Апартаменти</p>
          <p className="mr-4 font-bold text-sm">Будинок</p>
          <p className="mr-4 font-bold text-sm">Земля</p>
          <p className="mr-4 font-bold text-sm">Квартира</p>
          <p className="mr-4 font-bold text-sm">Комерційна</p>
        </div>
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Пошук...
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
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
      <div className="col-span-1">
        <ItemCard />
      </div>
    </div>
  );
}

export default Main;
