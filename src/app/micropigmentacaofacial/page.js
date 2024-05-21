"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/style/servicos.module.css";
import stylesPage from "@/style/page.module.css";

import { useTranslation } from "react-i18next";
import ImageCarousel from "../../components/ImageCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { t, i18n } = useTranslation();
  // State for the current index
  const [index, setIndex] = useState(0);

  // Your images in the slide directory
  const images = ["/cont/servicos/Facial/Imagem Principal/IMG_7582.jpg"];
  const imagesCar = [
    "/cont/servicos/Facial/Album/5FDC2437-89B7-4FE8-84F8-BB11843EC0DE.jpeg",
    "/cont/servicos/Facial/Album/8A64965E-039D-4BC5-B259-0A9323FCCEF4.jpeg",
    "/cont/servicos/Facial/Album/6691DDB2-443B-4E34-A52C-5AF9AE34ED53.jpeg",
    "/cont/servicos/Facial/Album/08031542-3815-47FE-A222-667D44D261F0.jpeg",
    "/cont/servicos/Facial/Album/IMG_7536.JPG",
  ];

  // Effect for cycling through images
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2; // Normalize x position to -1 to 1
    const y = ((e.clientY - top) / height - 0.5) * -2; // Normalize y position to -1 to 1
    setRotation({ x: y * 10, y: x * 10 }); // Adjust the multiplier for more/less tilt
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset rotation on mouse leave
  };
  return (
    <main>
      <div className={styles.slider}>
        {images.map((img, imgIndex) => (
          <div
            key={img}
            className={index === imgIndex ? styles.active : styles.slide}
          >
            <div className={styles.overlay}></div>
            <Image
              src={img}
              alt={`Slide ${imgIndex}`}
              width={1080}
              height={1920}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.texts}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.overlay}></div>
        <div className={styles.textComp}>
          <h2>{t("FEEDBACK")}</h2>
          <h3>{t("FACIAL_MICROPIGMENTATION")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.textFeedback}>
            <p>{t("Feedback_facial")}</p>
          </div>
        </div>

        <div className={stylesPage.textComp}>
          <div className={stylesPage.divideWin}>
            <div className={stylesPage.images}>
              <div>
                <h3>{t("Antes")}</h3>
                <Image
                  src="/cont/servicos/Facial/Antes e Depois/IMG_7536_2.JPG"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
              <div>
                <h3>{t("Depois")}</h3>
                <Image
                  src="/cont/servicos/Facial/Antes e Depois/IMG_7536_1.JPG"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
            </div>
            <div className={stylesPage.feedback}>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("GIL GONÇALVES")}
              </h2>
              <p>{t("gilFeedback")}</p>
            </div>
          </div>
        </div>
        <div className={styles.textComp}>
          <h2
            style={{
              color: "rgba(228, 203, 134, 0.7)",
            }}
          >
            {t("OTHER_EXAMPLES")}
          </h2>
        </div>
        <div className={styles.sliderContainer}>
          <ImageCarousel images={imagesCar} />
        </div>
        <div className={stylesPage.faq} style={{ zIndex: "2" }}>
          <div className={stylesPage.overlay}></div>
          <div className={stylesPage.divideFaq1}>
            <div className={stylesPage.faqText}>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("FAQ")}
              </h2>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("Is_Facial_Micropigmentation_Safe")}
              </h3>
              <p>{t("Is_Facial_Micropigmentation_Safe_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("How_Long_Does_Facial_Micropigmentation_Last")}
              </h3>
              <p>{t("How_Long_Does_Facial_Micropigmentation_Last_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("Can_You_Choose_The_Color_And_Shape_Of_Eyebrows_And_Lips")}
              </h3>
              <p>
                {t(
                  "Can_You_Choose_The_Color_And_Shape_Of_Eyebrows_And_Lips_Answer"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
