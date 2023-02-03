import React, { useRef } from "react";

export default function Registration(props) {

  const show = useRef();

  props.show ? show.current = "show" : show.current = " ";  /* check class */ 

  return (
    <section className={"registration " + show.current}> {/* adding class show */}
      <div className="wrapper">
        <div className="title">Види реєстрації</div>
        <div className="registration_content">
          <div className="reg_card">
            <div className="exist_left_words"> {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w last_word"></div> {/* remove margin */}
            </div>
            <div className="reg_card_content">
              <div className="reg_card_label">Фізична особа</div>
              <div className="reg_card_text">
                Проста система верифікації та доступ до всіх учасників агроринку
                та транспортної сфери без будь-яких обмежень роблять наш сервіс
                найкращим вибором для пересічного користувача. Ви можете як
                купувати, так і продавати товари і послуги на нашому сервісі.
                Пройдіть додаткову верифікацію та отримайте статус перевіреного
                учасника, що ще більше розширить ваші можливості пошуку
                партнерів та отримання прибутку. Також для приватного
                користувача буде особливо зручний наш супермаркет
                сільськогосподарської продукції. Шукайте потрібні вам категорії
                за допомогою просунутого фільтра та купуйте все в один клік.
              </div>
            </div>
          </div>
          <div className="reg_card">
            <div className="exist_left_words">  {/* Vertical column with words */}
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w last_word"></div>  {/* remove margin */}
            </div>
            <div className="reg_card_content">
              <div className="reg_card_label">Юридична особа</div>
              <div className="reg_card_text">
                Сервіс об'єднує практично всіх учасників транспортного та
                аграрного ринку України. Компанії, що надають послуги у сфері
                транспортування, оренди складських приміщень, оренди транспорту
                або оптової торгівлі сільськогосподарською продукцією можуть
                здійснювати будь-які операції в рамках одного сервісу. Система
                багаторівневої верифікації партнерів та функціонал укладання
                ф'ючерсних угод відкривають для компаній необмежені можливості
                для реалізації своїх бізнес-завдань.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
