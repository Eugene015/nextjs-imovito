import React from "react";
import Image from "next/image";
import owner_profile from "@/public/assets/owner_profile.jpg";

function OwnerProfile() {
  return (
    <div id="about" className="bg-[#2C2D33]">
      <div className="max-w-[1050px] w-full mx-auto py-16 flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        <div>
          <Image
            src={owner_profile}
            alt="owners profile"
            width="416"
            height="443"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="px-8 md:px-16 md:border-r border-gray-400">
              <h2 className="mb-2 text-white">Ігор Фельдман</h2>
              <p className="text-gray-400">Засновник</p>
            </div>
            <p className="text-gray-400 pl-8 mb-4 md:mb-0">
              Професійний інвестор, інвестиційний банкір
            </p>
          </div>
          <div className="px-8 md:p-16">
            <p className="text-gray-400">Освіта</p>
            <p className="mb-6 text-white">Фізика, Правознавство</p>
            <p className="text-gray-400">з 1993 року</p>
            <p className="mb-6 text-white">
              Працював у фінансових компаніях Києва на позиціях керівника
              кредитного та інвестиційного підрозділів
            </p>
            <p className="text-gray-400">з 2000 року</p>
            <p className="mb-6 text-white">
              Засновник, акціонер фінансової компанії та банків, будівельних
              компаній. Заробив інвесторам загалом більше 30 млн. долларів США.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;
