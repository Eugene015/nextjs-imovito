import React from "react";
import { BsCheck } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1050px] w-full mx-auto p-16">
      <div className="flex flex-col md:flex-row gap-16 text-sm mb-16">
        <div className="md:w-[25%]">
          <h3 className="mb-4">Можливості</h3>
          <ul className="">
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Пошук
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Купити
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Інвестувати
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Консультанти
            </li>
          </ul>
        </div>
        <div className="md:w-[25%]">
          <h3 className="mb-4">imovito</h3>
          <ul className="">
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Блог
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Про нас
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Контакти
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2 text-blue-500" />
              Політика конфіденційності
            </li>
          </ul>
        </div>
        <div className="md:w-[50%]">
          <h3 className="mb-4">Отримувати цікаві пропозиції</h3>
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="email"
              id="email"
              className="block w-full p-2 pl-4 mb-2 md:mr-2 md:mb-0 min-w-[250px] text-sm text-gray-900  rounded-lg  focus:border focus:ring-blue-500 focus:border-blue-200 outline-none border border-gray-200"
              placeholder="Введіть email"
              required
            />
            <button
              type="submit"
              className="text-white border border-blue-500 bg-blue-500  focus:ring-4 hover:text-gray-500 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2"
            >
              Підписатись
            </button>
          </div>
          <p className="text-xs text-gray-600">
            Натискаючи на кнопку &quot;Підписатись&quot;, ви підтверджуєте згоду
            на обробку персональних даних у відповідності до чинного
            законодавства України.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3>Ми в соцмережах</h3>
          <div className="flex justify-between gap-8 w-full md:max-w-[580px] my-4 text-3xl">
            <FaFacebook className="text-blue-700 hover:scale-105 cursor-pointer" />
            <FaTwitter className="text-blue-500 hover:scale-105 cursor-pointer" />
            <FaYoutube className="text-red-500 hover:scale-105 cursor-pointer" />
            <FaInstagram className="text-purple-500 hover:scale-105 cursor-pointer" />
          </div>
        </div>
        <div className="text-gray-900 md:max-w-[25%]">
          <h3 className="mb-2">+38 (044) 338 8830</h3>
          <button
            type="submit"
            className="text-gray-900 border border-blue-500  focus:ring-4 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2 mb-4"
          >
            Замовити зворотній дзвінок
          </button>
          <p className="text-xs text-gray-600">
            &copy;2023 OS Studio. Усі права збережено. Офіційний сайт IMOVITO.
            Угода про обробку персональних даних
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
