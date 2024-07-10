"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import ArrowBottomIcon from "@/icons/ArrowBottomIcon";

const Header = () => {
  const ref = React.useRef(null);
  const [openAboutUsDropdown, setOpenAboutUsDropdown] = useState(false);
  const [openInvestorDropdown, setOpenInvestorDropdown] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);
    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);
  const handleScrollUp = () => {};

  const handleScrollDown = () => {};
  return (
    <header className="header" ref={ref}>
      <Container>
        <div className="header__content">
          <div className="header__left">
            <div className="header__logo">
              <Link href={"/"}>
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="header__menu">
              <li className="header__menu_item" onClick={() => setOpenAboutUsDropdown(!openAboutUsDropdown)}>
                О нас
              </li>
              <li className="header__menu_item" onClick={() => setOpenInvestorDropdown(!openInvestorDropdown)}>
                Инвесторам
              </li>
            </ul>
          </div>

          <div className="header__right">
            <div className="header__theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <span>
                <MoonIcon />
              </span>
              <span className={`toggle ${theme == "light" ? "active" : ""}`}></span>
              <span>
                <SunIcon />
              </span>
            </div>
            <Link href={"/contact_us"}>
              <button className="header__button">Свяжитесь с нами</button>
            </Link>
            <div className="header__locales">
              <span>ru</span>
              <span>
                <ArrowBottomIcon />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
