import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div className="">
      <div className="max-w-[1050px] w-full mx-auto py-8">
        <h2 className="mb-4 text-center">Питання, які часто ставляться</h2>
      </div>
      <div className="md:w-[50%] w-[90%] mx-auto text-black mb-16">
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <Typography
              variant="paragraph"
              className="text-left font-bold relative hover:scale-105 hover:transition duration-500 hover:ease-out"
            >
              Які гарантії безпеки операцій з нерухомістю, за участі вашої
              компанії?
            </Typography>
          </AccordionHeader>
          <AccordionBody>
            Угоди готуються професійними юристами. Укладення угоди щодо
            нерухомого майна здійснюється нотаріально. Право власності виникає в
            момент укладення угоди та реєструється на ваше ім&apos;я одразу на
            місці в офісі нотаріуса. Ви отримуєте повний пакет документів на
            руки одразу після підписання всіх необхідних документів.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <Typography
              variant="paragraph"
              className="text-left font-bold relative hover:scale-105 hover:transition duration-500 hover:ease-out"
            >
              Чи потрібно під&apos;їзжати в офіс для укладення договору?
            </Typography>
          </AccordionHeader>
          <AccordionBody>
            Так. Оскільки операції з нерухомістю - це справа, яка потребує
            максимальної залученності та концентрації. Вам треба під&apos;їхати
            до нас в офіс на первинну консультацію. Уважно вивчити проекти
            договорів, які ми пропонуємо укласти. Прийняти рішення про подальшу
            співвпрацю та запланувати час на нотаріальні дії.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <Typography
              variant="paragraph"
              className="text-left font-bold relative hover:scale-105 hover:transition duration-500 hover:ease-out"
            >
              Чи необхідно буде платити податок при купівлі нерухомості?
            </Typography>
          </AccordionHeader>
          <AccordionBody>
            Ні. Податок з відчуження нерухомого майна оплачує продавець. Ви
            оплачуєте лише частину витрат на нотаріальне засвідчення угоди. Інші
            витрати несе продавець нерухомого майна.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <Typography
              variant="paragraph"
              className="text-left font-bold relative hover:scale-105 hover:transition duration-500 hover:ease-out"
            >
              Як убезпечити продавця та покупця під час розрахунків?
            </Typography>
          </AccordionHeader>
          <AccordionBody>
            Ми гнучкі щодо форми та порядку розрахунків. Можлива як
            безготівкова, так і готівкова форми. Як частково, так і на повну
            суму. Готівковий розрахунок можливий під час укладення нотаріальної
            угоди в офісі нотаріуса. Безготівковий розрахунок - через будь-яке
            відділення банку.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
