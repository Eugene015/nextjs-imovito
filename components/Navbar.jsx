import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle, BiPhoneCall } from "react-icons/bi";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[80px] fixed top-0 left-0 z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
        <Link href="/">
          <h2 className="pl-4">imovito</h2>
        </Link>
        <div className="pr-4">
          <ul className="hidden md:flex flex-wrap">
            <Link href="/">
              <li className="relative ml-6 before:transition ease-in duration-400 before:h-[2px] before:absolute before:w-[100%] before:bg-blue-500 before:bottom-[-12px] before:opacity-0 hover:before:bottom-[-8px] hover:before:opacity-100">
                Головна
              </li>
            </Link>
            <Link href="/#about">
              <li className="relative ml-6 before:transition ease-in duration-400 before:h-[2px] before:absolute before:w-[100%] before:bg-blue-500 before:bottom-[-12px] before:opacity-0 hover:before:bottom-[-8px] hover:before:opacity-100">
                Про нас
              </li>
            </Link>
            <Link href="/#skills">
              <li className="relative ml-6 before:transition ease-in duration-400 before:h-[2px] before:absolute before:w-[100%] before:bg-blue-500 before:bottom-[-12px] before:opacity-0 hover:before:bottom-[-8px] hover:before:opacity-100">
                Купити
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="relative ml-6 before:transition ease-in duration-400 before:h-[2px] before:absolute before:w-[100%] before:bg-blue-500 before:bottom-[-12px] before:opacity-0 hover:before:bottom-[-8px] hover:before:opacity-100">
                Контакти
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="ml-6 text-base uppercase hover:font-bold border-gray-700">
                <BiPhoneCall size={20} className="text-blue-500" />
              </li>
            </Link>
            <li className="ml-2 text-base uppercase border-gray-700">
              +38 (044) 338 8830
            </li>

            <Link href="/#contacts"></Link>
            <Link href="/#contacts">
              <li className="ml-4 text-base uppercase hover:font-bold border-gray-700">
                <BiUserCircle size={22} className="text-blue-500" />
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div
        onClick={() => setNav(false)}
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-20"
            : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 sm:right-0 sm:bottom-0 sm:w-[75%] md:w-[60%] lg:w-[45%] h-full bg-white p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h1>imovito</h1>
              </Link>
              <div
                onClick={handleNav}
                className="shadow shadow-gray-300 hover:shadow-lg p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Платформа для інвестицій в нерухомість
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Головна
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Про нас
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Купити
                </li>
              </Link>

              <Link href="/#contacts">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:font-bold"
                >
                  Контакти
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
