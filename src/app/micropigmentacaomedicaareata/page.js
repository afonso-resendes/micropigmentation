"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/style/servicos.module.css";
import stylesPage from "@/style/page.module.css";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import ImageCarousel from "../../components/ImageCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { t, i18n } = useTranslation();
  // State for the current index
  const [index, setIndex] = useState(0);

  // Your images in the slide directory
  const images = [
    "/cont/servicos/Paramedica Areata/Imagem Principal/IMG_7569.jpg",
  ];
  const imagesCar = [
    "/cont/servicos/Paramedica Areata/Album/00D65B11-8BBA-49D9-8190-4109DBEDB900.jpeg",
    "/cont/servicos/Paramedica Areata/Album/2D92008C-A65C-48C6-8551-624C7D4C20D2.jpeg",
    "/cont/servicos/Paramedica Areata/Album/BEDB23F2-840F-4C42-99C0-AD0FE230632B.jpeg",
    "/cont/servicos/Paramedica Areata/Album/Foto 2023-04-30 05.48.08 p.ÔÇ»m..jpg",
    "/cont/servicos/Paramedica Areata/Album/IMG_7913.jpg",
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
          <h3>{t("MEDICAL_MICROPIGMENTATION_AREATA")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.textFeedback}>
            <p>{t("Feedback_areata")}</p>
          </div>
        </div>

        <div className={stylesPage.textComp}>
          <div className={stylesPage.divideWin}>
            <div className={stylesPage.images}>
              <div>
                <h3>{t("Antes")}</h3>
                <Image
                  src="/cont/servicos/Paramedica Areata/Antes e Depois/A7A64464-9774-4176-AE43-3B79F5592483.jpeg"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
              <div>
                <h3>{t("Depois")}</h3>
                <Image
                  src="/cont/servicos/Paramedica Areata/Antes e Depois/7314E6B5-DE90-4B98-8AB7-40A40398F559.jpeg"
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
                {t("RODOLFO VIOLA")}
              </h2>
              <p>{t("Rodolfo_feedback")}</p>
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
                {t(
                  "Is_Paramedical_Micropigmentation_Suitable_For_All_Skin_Types"
                )}
              </h3>
              <p>
                {t(
                  "Is_Paramedical_Micropigmentation_Suitable_For_All_Skin_Types_Answer"
                )}
              </p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("Can_A_Natural_Result_Be_Achieved_In_Alopecia_Areas")}
              </h3>
              <p>
                {t("Can_A_Natural_Result_Be_Achieved_In_Alopecia_Areas_Answer")}
              </p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t(
                  "How_Long_Does_The_Result_Of_Paramedical_Micropigmentation_Last"
                )}
              </h3>
              <p>
                {t(
                  "How_Long_Does_The_Result_Of_Paramedical_Micropigmentation_Last_Answer"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
