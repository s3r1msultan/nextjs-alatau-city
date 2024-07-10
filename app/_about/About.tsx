import Container from "@/components/Container/Container";
import VerticalLines from "@/components/VerticalLines/VerticalLines";
import React from "react";

import Image from "next/image";
import about_image_1 from "@/public/images/about_image_1.png";
import about_image_2 from "@/public/images/about_image_2.png";

const About = () => {
  return (
    <section className="about">
      <VerticalLines />
      <Container>
        <div className="about__content">
          <h2 className="about__content__title">Alatau City</h2>
          <div className="about__content__info">
            <div className="left_part">
              <Image src={about_image_1} alt={""} className="about__image__1" />
              <Image src={about_image_2} alt={""} className="about__image__2" />
            </div>
            <div className="right_part">
              <p>
                Добро пожаловать в Alatau City – инновационный город будущего, который представляет собой уникальное
                сочетание четырех современных тематических районов, раскинутых вдоль стратегической автомагистрали
                Алматы – Конаев. Наш город становится неотъемлемым звеном на международных маршрутах, включая ключевые
                направления, такие как Западная Европа – Западный Китай, Центрально-Азиатское региональное экономическое
                сотрудничество (ЦАРЭС) и Север-Юг, тесно взаимодействуя с глобальной стратегической инициативой «Новый
                Шелковый путь».
              </p>
              <p>
                Наши четыре тематических района – Gate District, Golden District, Growing District и Green District –
                созданы с любовью к инновациям и стремлению к идеальному образу жизни. Здесь каждый район – это
                уникальное пространство, сочетающее в себе современный дизайн, высокотехнологичные решения и прекрасные
                природные ландшафты.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
