"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/style/navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar({ router }) {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [home, setHome] = useState(true);
  const pathname = usePathname();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [currentLanguage, setCurrentLanguage] = useState("pt"); // State to track the current language
  const dropdownRef = useRef(null); // Ref to track the dropdown menu

  const flags = {
    pt: { name: "Português", svg: "/flags/portugal.svg" },
    en: { name: "English", svg: "/flags/uk.svg" },
    es: { name: "Español", svg: "/flags/spain.svg" },
  };

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    if (pathname !== "/" && pathname !== "/contacto") {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [pathname]);

  useEffect(() => {
    // Close dropdown if clicked outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
    setCurrentLanguage(language);
  };

  return (
    <>
      {windowSize.width <= 900 ? (
        <>
          <div className={styles.navbarMobile}>
            <div>
              <Image
                className={styles.logo}
                src="/logosmall.png"
                width={500}
                height={500}
                alt="Logo"
              />
            </div>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={styles.svgBars}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={styles.svgBars}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </>
      ) : null}
      <nav
        className={styles.navbar}
        style={
          windowSize.width <= 900 && menuOpen ? { display: "block" } : null
        }
      >
        {windowSize.width <= 900 ? null : (
          <Link
            href="/"
            style={{
              padding: 0,
            }}
          >
            <Image
              src="/Grafica_Alternativa_b-removebg.png"
              alt="Logo"
              width={1080}
              height={1920}
            />
          </Link>
        )}
        <div
          className={styles.navbarcontainer}
          style={home ? null : { background: "none" }}
        >
          <Link
            href="/"
            onClick={() => {
              setHome(true);
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link href="/quemsomos">{t("Quem Somos")}</Link>
          <Link href="/servicos">{t("Serviços")}</Link>
          <Link
            href="/contacto"
            onClick={() => {
              setHome(true);
            }}
          >
            {t("Contato")}
          </Link>
          <Link href="/media">Media</Link>

          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              className={styles.dropbtn}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={flags[currentLanguage].svg}
                alt="Flag"
                style={{
                  width: "20px",
                  verticalAlign: "middle",
                  marginRight: "5px",
                  marginTop: "0px",
                }}
              />
              {flags[currentLanguage].name}
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <div onClick={() => changeLanguage("pt")}>
                  <img
                    src={flags.pt.svg}
                    alt="Flag"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                      marginTop: "0px",
                    }}
                  />
                  Português
                </div>
                <div onClick={() => changeLanguage("en")}>
                  <img
                    src={flags.en.svg}
                    alt="Flag"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                      marginTop: "0px",
                    }}
                  />
                  English
                </div>
                <div onClick={() => changeLanguage("es")}>
                  <img
                    src={flags.es.svg}
                    alt="Flag"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                      marginTop: "0px",
                    }}
                  />
                  Español
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
