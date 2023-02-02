import React, { useRef } from "react";

export default function Driver(props) {
  const show = useRef()
  if(props.show){
    show.current='show'
  }else{
    show.current=' '
  }
  return (
    <section className={"driver " + show.current}>
      <div className="wrapper">
        <div className="driver_all_contetn">
        <div className="driver_title">
          <img src="/image/icons/Logo-driver.png" alt="" />
        </div>
        <div className="driver_content">
          <div className="driver_info">
            <div className="driver_info_title">
              <h2> Організація, контроль та безпека</h2>
              <div className="driver_info_sub_title">
                Додаток для водіїв транспортних засобів
              </div>
            </div>
            <div className="driver_info_lists">
              <div className="info_list_users">
                <h3>Для юридичних/фізичних осіб</h3>
                <ul className="list_users">
                  <li>Додавання водія до виставленого транпсорту</li>
                  <li>
                    Відстеження водії на карті під час виконання замовлення та у
                    вільний час
                  </li>
                  <li>Контроль переписки та ходу виконання замовлення</li>
                  <li>Довіра від користувачів та захист транспротну</li>
                </ul>
              </div>
              <div className="info_list_drivers">
                <h3>Для водіїв</h3>
                <ul className="list_drivers">
                  <li>
                    Корисні оповіщення про заявки на водійство, нове замовлення
                  </li>
                  <li>Карта навігатор з прокладанням найзручніших маршрутів</li>
                  <li>
                    Організація замовлень та чат із замовником для обговорення
                    деталей
                  </li>
                  <li>
                    Додавання проміжних точок між головними точками загрузки та
                    вигрузки
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="driver_image">
            <img src="/image/driver-phone.png" alt="" />
          </div>
          <div className="driver_future"> Скоро</div>
        </div>
        </div>
      </div>
      
    </section>
  );
}
