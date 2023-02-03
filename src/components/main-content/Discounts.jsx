import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

export default function (props) {

  const show = useRef();
  const slides =useRef()

  slides.current =(
   <>
      <SwiperSlide>
      <div className="swiper_slide">
        <div className="slide_image">
          <img src="/image/first-slide.png" alt="slide image" />
  
          <div className="advertised">Рекламовано</div>
          <div className="certified"></div>
  
        </div>
        <div className="slide_info">
          <div className="slide_main_info">
            <h2>Склад 1</h2>
            <div className="slide_price">
              300 грн/кв.м. <span>Мін.ціна</span>
            </div>
          </div>
          <div className="slide_more_info">
            <div className="slide_rating">4.8</div>
            <div className="slide_views">12 тис</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper_slide">
        <div className="slide_image">
          <img src="/image/second-slide.png" alt="slide image" />
          
          <div className="advertised">Рекламовано</div>
          <div className="cheked"> Перевірено</div>
          <div className="certified"></div>
  
        </div>
        <div className="slide_info">
          <div className="slide_main_info">
            <h2>Склад 1</h2>
            <div className="slide_price">
              300 грн/кв.м. <span>Мін.ціна</span>
            </div>
          </div>
          <div className="slide_more_info">
            <div className="slide_rating">4.8</div>
            <div className="slide_views">12 тис</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper_slide">
        <div className="slide_image">
          <img src="/image/third-slide.png" alt="slide image" />
  
          <div className="advertised">Рекламовано</div>
          <div className="certified"></div>
  
        </div>
        <div className="slide_info">
          <div className="slide_main_info">
            <h2>Склад 1</h2>
            <div className="slide_price">
              300 грн/кв.м. <span>Мін.ціна</span>
            </div>
          </div>
          <div className="slide_more_info">
            <div className="slide_rating">4.8</div>
            <div className="slide_views">12 тис</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper_slide">
        <div className="slide_image">
          <img src="/image/four-slide.png" alt="slide image" />
          
          <div className="advertised">Рекламовано</div>
          <div className="certified"></div>
          
        </div>
        <div className="slide_info">
          <div className="slide_main_info">
            <h2>Склад 1</h2>
            <div className="slide_price">
              300 грн/кв.м. <span>Мін.ціна</span>
            </div>
          </div>
          <div className="slide_more_info">
            <div className="slide_rating">4.8</div>
            <div className="slide_views">12 тис</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
   </>
  )

  props.show ? show.current = "show" : show.current = " ";  /* check class */ 

  return (
    <section className={"discounts " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="title">Знижка на послуги MOOW до 12.12</div>
        <div className="discounts_content">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            loop={true}
            direction="horizontal"
            spaceBetween={0}
            loopedSlides={4}
          >
           {slides.current}
           {slides.current}
           {slides.current}
           {slides.current}
        
          </Swiper>
        </div>
      </div>
    </section>
  );
}
