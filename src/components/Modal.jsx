import React from "react";

import "./modal.css";

const Modal = ({ active, setActive }) => {

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive()}   /* on click at back close modal */
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_title">
          <div>Документи</div>
          <div 
          className="exit" 
          onClick={() => setActive()}> {/*  on click at X close modal */}
            x
          </div>
        </div>
        <ul className="modal_doc_list">
          <li>
            <a href="#">
              Угода користувача та Правила користування сервісом «MOOW»
            </a>
          </li>
          <li>
            <a href="#">Політика конфіденційності</a>
          </li>
          <li>
            <a href="#">Повідомлення про обробку персональних даних</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
