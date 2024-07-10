"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import intro_1 from "@/public/images/intro_1.jpg";
import intro_2 from "@/public/images/intro_2.jpg";
import intro_3 from "@/public/images/intro_3.jpg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Container from "@/components/Container/Container";
import Link from "next/link";
import ArrowRightIcon from "@/icons/ArrowRightIcon";

const Intro = () => {
  const images: Array<{ src: any; title: string; subtitle: string }> = [
    { src: intro_1, title: "Alatau City", subtitle: "Eco-polis & Urban health" },
    { src: intro_2, title: "Alatau City", subtitle: "Eco-polis & Urban health" },
    { src: intro_3, title: "Alatau City", subtitle: "Eco-polis & Urban health" },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="intro">
      <Swiper
        loop
        navigation
        autoplay={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="intro__image">
            <Image className="intro__image" src={image.src} alt={image.title} />

            <div className="intro__overlay">
              <Container>
                <div className=" intro__content ">
                  <div className="intro__content__title">
                    <span>Умный город</span>
                    <h1>Alatau City</h1>
                  </div>
                  <Link href={""}>
                    <div className="invest_button">
                      <button>Инвестируй с нами</button>
                    </div>
                  </Link>
                  <a href="" download={""} className="download_button">
                    <span>Скачать презентацию</span> <ArrowRightIcon />
                  </a>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={70}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs container pagination"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div>
              <h3>#0{index + 1}</h3>
              <hr />
              <h4>{image.title}</h4>
              <p>{image.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Intro;
