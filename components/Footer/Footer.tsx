import React from "react";
import Container from "../Container/Container";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import CompassIcon from "@/icons/CompassIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import EmailIcon from "@/icons/EmailIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__logo">
              <Link href={"/"}>
                <Image src={logo} alt="Alatau City" />
              </Link>
            </div>
            <ul className="footer__contacts">
              <li className="footer__contact">
                <CompassIcon />

                <div className="footer__contact__info">
                  <div className="footer__contact__info__title">Офис:</div>
                  <div className="footer__contact__info__text">БЦ «Нурлы-Тау», пр. Аль-Фараби 19, к3б, 3 этаж</div>
                </div>
              </li>
              <li className="footer__contact">
                <PhoneIcon />

                <div className="footer__contact__info">
                  <div className="footer__contact__info__title">Свяжитесь с нами:</div>
                  <div className="footer__contact__info__text">
                    <a href="tel:+77058322255">+7 705 832 2255</a>
                  </div>
                </div>
              </li>
              <li className="footer__contact">
                <EmailIcon />

                <div className="footer__contact__info">
                  <div className="footer__contact__info__title">По вопросам инвестирования:</div>
                  <div className="footer__contact__info__text">
                    <a href="mailto:info@alatausez.kz">invest@alatausez.kz</a>
                  </div>
                </div>
              </li>
              <li className="footer__contact">
                <EmailIcon />

                <div className="footer__contact__info">
                  <div className="footer__contact__info__title">По общим вопросам: </div>
                  <div className="footer__contact__info__text">
                    <a href="mailto:info@alatausez.kz">info@alatausez.kz</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <nav>
              <h6>Об «Alatau» SEZ</h6>
              <ul>
                <li>
                  <Link href={""}>Что такое СЭЗ ALATAU</Link>
                </li>
                <li>
                  <Link href={""}>Gate district</Link>
                </li>
                <li>
                  <Link href={""}>Golden district</Link>
                </li>
                <li>
                  <Link href={""}>Growing district</Link>
                </li>
                <li>
                  <Link href={""}>Green district</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h6>Управляющая компания</h6>
              <ul>
                <li>
                  <Link href={""}>Об УК</Link>
                </li>
                <li>
                  <Link href={""}>Карьера</Link>
                </li>
                <li>
                  <Link href={""}>Пресс центр</Link>
                </li>
                <li>
                  <Link href={""}>Контакты</Link>
                </li>
                <li>
                  <Link href={""}>Нормативно-правовые документы</Link>
                </li>
                <li>
                  <Link href={""}>Антикоррупционная комплаенс служба</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h6>Инвесторам</h6>
              <ul>
                <li>
                  <Link href={""}>Гид инвестора</Link>
                </li>
                <li>
                  <Link href={""}>Процесс регистрации</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
