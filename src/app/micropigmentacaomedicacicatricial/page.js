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
    "/cont/servicos/Paramedica Cicatricial/Imagem Principal/IMG_7940.jpg",
  ];
  const imagesCar = [
    "/cont/servicos/Paramedica Cicatricial/Album/1B1575F3-F3BB-4A28-81F9-899F81663D98.jpeg",
    "/cont/servicos/Paramedica Cicatricial/Album/5FF08A74-6275-4C97-A21E-4CD94B1B1A88.jpeg",
    "/cont/servicos/Paramedica Cicatricial/Album/27488491-C31A-4D78-A469-3AC7ABCB5954.jpeg",
    "/cont/servicos/Paramedica Cicatricial/Album/B2759A1A-CC8B-49D6-8319-4C5D83468B54.jpeg",
    "/cont/servicos/Paramedica Cicatricial/Album/IMG_7921.JPG",
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
          <h3>{t("MEDICAL_MICROPIGMENTATION_SCAR")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.textFeedback}>
            <p>{t("Feedback_cicatricial")}</p>
          </div>
        </div>

        <div className={stylesPage.textComp}>
          <div className={stylesPage.divideWin}>
            <div className={stylesPage.images}>
              <div>
                <h3>{t("Antes")}</h3>
                <Image
                  src="/cont/servicos/Paramedica Cicatricial/Antes e Depois/A360CB93-F11D-481C-ADE0-84961ADDDBC1.jpeg"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
              <div>
                <h3>{t("Depois")}</h3>
                <Image
                  src="/cont/servicos/Paramedica Cicatricial/Antes e Depois/4EB8715C-9FF3-4C51-B588-1DE0A407FD9A.jpeg"
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
                {t("VÍCTOR RIBEIRO")}
              </h2>
              <p>{t("vitorFeedback")}</p>
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
                {t("Is_Scar_Scalp_Micropigmentation_Possible_On_Any_Scar")}
              </h3>
              <p>{t("Is_Scar_Scalp_Micropigmentation_Possible_On_Any_Scar_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("How_Long_Does_Scar_Scalp_Micropigmentation_Last")}
              </h3>
              <p>{t("How_Long_Does_Scar_Scalp_Micropigmentation_Last_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("Is_Scar_Scalp_Micropigmentation_Painful")}
              </h3>
              <p>
                {t(
                  "Is_Scar_Scalp_Micropigmentation_Painful_Answer"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
