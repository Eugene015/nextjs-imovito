import React from "react";
import ItemCard from "./ui/ItemCard";

function Main() {
  return (
    <div className="max-w-[1440px] w-full h-screen grid grid-cols-3 gap-16 justify-center items-center">
      <div className="col-span-2">
        <h1 className="mb-6">
          Imovito - платформа для інвестицій в нерухомість
        </h1>
        <p className="mb-8">
          Доходність до 35%, низькі ризики, об`єктивна аналітика
        </p>
        <div className="flex flex-wrap mb-4">
          <button className="mr-4 rounded-md">Всі</button>
          <button className="mr-4 rounded-md">Апартаменти</button>
          <button className="mr-4 rounded-md">Будинок</button>
          <button className="mr-4 rounded-md">Земля</button>
          <button className="mr-4 rounded-md">Квартира</button>
          <button className="mr-4 rounded-md">Комерційна</button>
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
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Пошук..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Пошук
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default Main;
