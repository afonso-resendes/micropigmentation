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
  const images = ["/cont/servicos/Capilar/Imagem Principal/FullSizeRender.jpg"];
  const imagesCar = [
    "/cont/servicos/Capilar/Album/00CAEDF0-F31F-480A-A8A3-8490343C2ED0.jpeg",
    "/cont/servicos/Capilar/Album/4C01FDCA-18BF-4C11-8271-24D8C02BE355.jpeg",
    "/cont/servicos/Capilar/Album/6D262140-8AC1-476E-96FD-3D4F8138912E.jpeg",
    "/cont/servicos/Capilar/Album/FC98477B-439B-4512-BDBD-2050E888C9D5.jpeg",
    "/cont/servicos/Capilar/Album/E0A9F763-3546-4B34-987A-EF04FE4CA644.jpeg",
    "/cont/servicos/Capilar/Album/D3CA6931-4B04-4A22-8EF6-02307F70D7D5.jpeg",
    "/cont/servicos/Capilar/Album/AD5D497D-0DBF-4989-A72E-A340E25ADBA1.jpeg",
    "/cont/servicos/Capilar/Album/96DC93B9-5DA3-4EA3-9186-215280B72C61.jpeg",
    "/cont/servicos/Capilar/Album/89B3B535-26D1-4DA9-9185-EBF5C5A03116.jpeg",
    "/cont/servicos/Capilar/Album/70D758A5-C0EF-40B5-8BD6-40734D8C28E1.jpeg",
    "/cont/servicos/Capilar/Album/9EFAC542-98CB-48CD-801A-39C47C13F4A9.jpeg",
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
          <h3>{t("SCALP_MICROPIGMENTATION")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.textFeedback}>
            <p>{t("Feedback_capilar")}</p>
          </div>
        </div>

        <div className={stylesPage.textComp}>
          <div className={stylesPage.divideWin}>
            <div className={stylesPage.images}>
              <div>
                <h3>{t("Antes")}</h3>
                <Image
                  src="/feedback/1.jpeg"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
              <div>
                <h3>{t("Depois")}</h3>
                <Image
                  src="/feedback/2.jpeg"
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
                {t("Is_Scalp_Micropigmentation_Painful")}
              </h3>
              <p>{t("Is_Scalp_Micropigmentation_Painful_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("How_Long_Does_Scalp_Micropigmentation_Last")}
              </h3>
              <p>{t("How_Long_Does_Scalp_Micropigmentation_Last_Answer")}</p>
              <h3
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("Can_You_Choose_The_Color_And_Density_Of_Pigmented_Hairs")}
              </h3>
              <p>
                {t(
                  "Can_You_Choose_The_Color_And_Density_Of_Pigmented_Hairs_Answer"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
