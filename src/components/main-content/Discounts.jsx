import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

export default function (props) {
  const { t, i18n } = useTranslation  ();

  const show = useRef();
  const slidesFirstGroup = useRef();
  const slidesSecondGroup = useRef();
  const slidesThirdGroup = useRef();
  const slidesFourGroup = useRef();

  slidesFirstGroup.current = (
    <>
      <SwiperSlide key={'slide_0'}>
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
      <SwiperSlide key={'slide_1'}>
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
      <SwiperSlide key={'slide_2'}>
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
      <SwiperSlide key={'slide_3'}>
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
  );
  slidesSecondGroup.current = (
    <>
      <SwiperSlide key={'slide_4'}>
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
      <SwiperSlide key={'slide_5'}>
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
      <SwiperSlide key={'slide_6'}>
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
      <SwiperSlide key={'slide_7'}>
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
  );
  slidesThirdGroup.current = (
    <>
      <SwiperSlide key={'slide_8'}>
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
      <SwiperSlide key={'slide_9'}>
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
      <SwiperSlide key={'slide_10'}>
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
      <SwiperSlide key={'slide_11'}>
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
  );
  slidesFourGroup.current = (
    <>
      <SwiperSlide key={'slide_12'}>
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
      <SwiperSlide key={'slide_13'}>
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
      <SwiperSlide key={'slide_14'}>
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
      <SwiperSlide key={'slide_15'}>
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
  );

  props.show ? (show.current = "show") : (show.current = " "); /* check class */

  return (
    <section className={"discounts " + show.current}>  {/* adding class show */}
      <div className="wrapper">
        <div className="title">{t("discount_title")}  </div>
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
            {slidesFirstGroup.current}
            {slidesSecondGroup.current}
            {slidesThirdGroup.current}
            {slidesFourGroup.current}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
