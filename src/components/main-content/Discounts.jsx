import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function () {
  return (
    <section className="discounts">
      <div className="wrapper">
        <div className="title">Знижка на послуги MOOW до 12.12</div>
        <div className="discounts_content">
          <Swiper
           modules={[Autoplay]}
            autoplay={{
              delay: 500,
            }}
           
       
            loop={true}
            direction="horizontal"
            spaceBetween={0}
            loopedSlides={1}
            slidesPerView={3}
            onSlideChange={() => console.log()}
            onSwiper={(swiper) => console.log()}
          >
            <SwiperSlide>
              <div className="swiper_slide">
                <div className="slide_image">
                  <img src="/image/first-slide.png" alt="" />
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
                  <img src="/image/second-slide.png" alt="" />
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
                  <img src="/image/third-slide.png" alt="" />
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
                  <img src="/image/four-slide.png" alt="" />
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
          </Swiper>
        </div>
      </div>
    </section>
  );
}
