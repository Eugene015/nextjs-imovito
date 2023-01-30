import React from "react";
import { BsCheck } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1280px] w-full mx-auto p-16">
      <div className="flex  gap-16 text-sm mb-16">
        <div className="w-[25%]">
          <h3 className="mb-4">Можливості</h3>
          <ul className="">
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Пошук
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Купити
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Інвестувати
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Консультанти
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <h3 className="mb-4">imovito</h3>
          <ul className="">
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Блог
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Про нас
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Контакти
            </li>
            <li className="mb-2">
              <BsCheck className="inline mr-2" />
              Політика конфіденційності
            </li>
          </ul>
        </div>
        <div className="w-[50%]">
          <h3 className="mb-4">Отримувати цікаві пропозиції</h3>
          <div className="flex mb-4">
            <input
              type="email"
              id="email"
              className="block w-full p-2 pl-4 mr-2 min-w-[250px] text-sm text-gray-900  rounded-lg  focus:border focus:ring-blue-500 focus:border-blue-200 outline-none border border-gray-200"
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
      <div className="flex justify-between">
        <div>
          <h3>Ми в соцмережах</h3>
          <div className="flex justify-between gap-8 w-full md:max-w-[580px] my-4 text-blue-500 text-3xl">
            <FaFacebook className="" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="text-gray-900 max-w-[25%]">
          <h3 className="mb-2">+38 (044) 338 8830</h3>
          <button
            type="submit"
            className="text-gray-900 border border-blue-500  focus:ring-4 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2 mb-2"
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
