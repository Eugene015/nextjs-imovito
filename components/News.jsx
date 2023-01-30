import React from "react";
import Image from "next/image";
import news_1 from "@/public/assets/news_1.jpg";
import news_2 from "@/public/assets/news_2.jpg";
import news_3 from "@/public/assets/news_3.jpg";
import news_4 from "@/public/assets/news_4.jpg";

function News() {
  return (
    <div className="max-w-[1280px] w-full mx-auto py-16">
      <h1 className="mb-4 text-center md:text-left">
        Новини та аналітика ринку нерухомості
      </h1>
      <p className="mb-16 text-center md:text-left">
        Останні новини та аналітичні звіти, а також корисні поради наших
        експертів
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 mb-8">
        <div className="relative">
          <Image src={news_1} alt="news 1" width="320" height="237" />
          <div className="absolute bottom-5 left-5 max-w-[80%] text-white">
            <h3 className="mb-1">Ринок елітної нерухомості Києва</h3>
            <p className="text-sm text-gray-300">30.01.2023</p>
          </div>
        </div>
        <div className="relative">
          <Image src={news_2} alt="news 1" width="320" height="237" />
          <div className="absolute bottom-5 left-5 max-w-[80%] text-white">
            <h3 className="mb-1">Ринок нерухомості під великий бюджет</h3>
            <p className="text-sm text-gray-300">19.01.2023</p>
          </div>
        </div>
        <div className="relative">
          <Image src={news_3} alt="news 1" width="320" height="237" />
          <div className="absolute bottom-5 left-5 max-w-[80%] text-white">
            <h3 className="mb-1">Квартири в Одесі</h3>
            <p className="text-sm text-gray-300">11.01.2023</p>
          </div>
        </div>
        <div className="relative">
          <Image src={news_4} alt="news 1" width="320" height="237" />
          <div className="absolute bottom-5 left-5 max-w-[80%] text-white">
            <h3 className="mb-1">Елітна заміська нерухомість Києвщини</h3>
            <p className="text-sm text-gray-300">22.12.2022</p>
          </div>
        </div>
      </div>
      <hr className="border-2 border-blue-200 w-[10%] mx-auto" />
    </div>
  );
}

export default News;
