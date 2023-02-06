import React, { useState } from "react";
import "./footerStyle.css";
import Modal from "../Modal";
const Footer = () => {
  
  const [modalActive, setModalActive] = useState();

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_logo">
          <img src="/image/icons/footer-logo.svg" alt="Footer logo" />
        </div>
        <div className="footer_content">
          <div className="footet_pages">
            Сторінки
            <ul className="footet_pages_list">
              <a href="#">
                <li>Головна</li>
              </a>
              <a href="#">
                <li>Про сервіс</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
              <a href="#">
                <li>Команда</li>
              </a>
            </ul>
          </div>
          <div className="footer_contacts ">
            Контакти
            <ul className="footer_contacts_list">
              <a href="#">
                <li>Київ-03188</li>
              </a>
              <a href="#">
                <li>moow.ltd@gmail.com</li>
              </a>
            </ul>
          </div>
          <div className="footer_socials">
            Соціальні мережі
            <div className="socials">
              <a className="facebook" href="#">
                <img src="/image/icons/facebook.svg" alt="facebook" />
              </a>
              <a className="instagram" href="#">
                <img src="/image/icons/instagram.svg" alt="instagram" />
              </a>
              <a className="youtube" href="#">
                <img src="/image/icons/youtube.svg" alt="youtube" />
              </a>
            </div>
          </div>
          <div
            className="footer_documents"
            onClick={() => setModalActive(true)}
          >
            Документи
          </div>
          <div className="footer_app_or_web">
            <div className="footer_app_or_web_title">
              Встанови безкоштовний додаток на смартфон
            </div>
            <div className="footer_app_or_web_buttons">
                <a href="#">   {/* button  */}
                  <div className="google_play"></div>
                </a>
                <a href="#">   {/* button  */}
                  <div className="app_store"></div>
                </a>
              </div>
            <div className="footer_app_or_web_subtitle">
              Або почни працювати з браузеру
            </div>
            <a className="footer_web_button" href="#">
              До веб-версії MOOW
            </a>
          </div>
        </div>
        <div className="copyright">
          ©ТОВ «Діджітал інвест адвайзор», 2021-2023
        </div>
      </div>
      <Modal 
      active={modalActive} 
      setActive={() => setModalActive(false)} />
    </footer>
  );
};

export default Footer;
