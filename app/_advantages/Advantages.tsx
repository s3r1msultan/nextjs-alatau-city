import Container from "@/components/Container/Container";
import React from "react";
import Image from "next/image";
import image from "@/public/images/advantages_image_1.png";
import VerticalLines from "@/components/VerticalLines/VerticalLines";
import builder from "@/public/images/builder.png";
import complex from "@/public/images/complex.png";

const Advantages = () => {
  return (
    <section className="advantages">
      <VerticalLines />
      <Container>
        <h2>Преимущества участия в СЭЗ</h2>
        <div className="advantages__content">
          <Image src={image} alt={""} className="advantages__image" />
          <ul className="advantages__list__1">
            <li className="advantages__list__1__item">Имущественный налог, налог на землю</li>
            <li className="advantages__list__1__item">НДС (по облагаемому импорту), КПН</li>
            <li className="advantages__list__1__item">Таможенные пошлины</li>
          </ul>
          <ul className="advantages__list__2">
            <li className="advantages__list__2__item">
              <Image src={builder} alt={""} />
              <p>Безвозмездное подведение инженерных сетей и инфраструктуры до площадки</p>
            </li>
            <li className="advantages__list__2__item">
              <Image src={complex} alt={""} />
              <p>Упрощенная процедура найма иностранной рабочей силы</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
