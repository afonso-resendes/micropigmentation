"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/style/page.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import lightbox style

export default function Home() {
  const { t, i18n } = useTranslation();
  // State for the current index
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Desktop images
  const desktopImages = [
    "/home/home_0.png",
    "/home/home_1.png",
    "/home/home_2-3.png",
    "/home/home_3.png",
    "/home/home_4.png",
    "/home/home_5.png",
    "/home/home_6.png",
    "/home/home_7.png",
    "/home/home_8.png",
  ];

  // Mobile images
  const mobileImages = [
    "/home_mobile/IMG_2307.PNG",
    "/home_mobile/IMG_2304.PNG",
    "/home_mobile/IMG_2308.PNG",
    "/home_mobile/IMG_2309.PNG",
    "/home_mobile/IMG_2305.PNG",
    "/home_mobile/IMG_2314.PNG",
    "/home_mobile/IMG_2315.PNG",
    "/home_mobile/IMG_2318.PNG",
    "/home_mobile/IMG_2311.PNG",
  ];

  // Select images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  const [sliderValue, setSliderValue] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Images for the "O NOSSO ESPAÇO" section
  const ourSpaceImages = [
    "/gallery/0_jmicro-scaled.jpg",
    "/gallery/1_jmicro-scaled.jpg",
    "/gallery/2_jmicro-scaled.jpg",
    "/gallery/3_jmicro-scaled.jpg",
    "/gallery/4_jmicro-scaled.jpg",
    "/gallery/6_jmicro-scaled.jpg",
    "/gallery/7_jmicro-scaled.jpg",
    "/gallery/8_jmicro-scaled.jpg",
    "/gallery/10_jmicro-scaled.jpg",
    "/gallery/12_jmicro-scaled.jpg",
    "/gallery/13_jmicro-scaled.jpg",
    "/gallery/14_jmicro-scaled.jpg",
    "/gallery/15_jmicro-scaled.jpg",
    "/gallery/16_jmicro-scaled.jpg",
    "/gallery/17_jmicro-scaled.jpg",
  ];

  // Function to open the lightbox at the specified image inde
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  // Effect to set page title
  useEffect(() => {
    document.title =
      "JMicropigmentation - Micropigmentação Capilar Hiper-Realista";
  }, []);

  // Effect to detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Check on mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Effect for cycling through images
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main>
      <div className={styles.slider}>
        {images.map((img, imgIndex) => (
          <div
            key={img}
            className={index === imgIndex ? styles.active : styles.slide}
          >
            <div className={styles.overlay}></div>

            <div className={styles.banner}>
              <p>{t("MICROPIGMENTAÇÃO CAPILAR")}</p>
              <p>{t("HIPER-REALISTA")}</p>
              <Link href="/micropigmentacaocapilar">{t("Saber mais")}</Link>
            </div>
            <Image
              src={img}
              alt={`Slide ${imgIndex}`}
              width={1080}
              height={1920}
            />
          </div>
        ))}
      </div>
      <div className={styles.comparison}>
        <div className={styles.wrapper1}>
          <div className={styles.images1}>
            <div className={styles.img1}></div>
            <div
              className={styles.img2}
              style={{ width: `${sliderValue}%` }}
            ></div>
          </div>
          <div className={styles.slider1}>
            <div
              className={styles.dragline1}
              style={{ left: `${sliderValue}%` }}
            >
              <span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.texts}>
        <div className={styles.overlay}></div>
        <div className={styles.textComp}>
          <h2>{t("O QUE É")}</h2>
          <h3>{t('MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA "GRANULADA"')}</h3>
          <p>{t("micropigmentationDescription")}</p>

          <div className={styles.link}>
            <Link href="/servicos">{t("SABER MAIS")}</Link>
          </div>
        </div>
        <div className={styles.textComp}>
          <h3>{t("OS NOSSOS SERVIÇOS")}</h3>
          <h2 style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}>
            {t("MICROPIGMENTAÇÃO")}
          </h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                src="/cards/1.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2>{t("Capilar")}</h2>
              <p>{t("capilarDescription")}</p>
              <Link href="/micropigmentacaocapilar">{t("SABER MAIS")}</Link>
            </div>
            <div className={styles.card}>
              <Image
                src="/cards/2.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2>{t("FACIAL")}</h2>
              <p>{t("facialDescription")}</p>
              <Link href="/micropigmentacaofacial">{t("SABER MAIS")}</Link>
            </div>
            <div className={styles.card}>
              <Image
                src="/cards/3.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2>{t("PARAMÉDICA AREATA")}</h2>
              <p>{t("paramedicalAreataDescription")}</p>
              <Link href="/micropigmentacaomedicaareata">
                {t("SABER MAIS")}
              </Link>
            </div>
            <div className={styles.card}>
              <Image
                src="/cards/4.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2>{t("PARAMÉDICA CICATRICIAL")}</h2>
              <p>{t("paramedicalCicatricialDescription")}</p>
              <Link href="/micropigmentacaomedicacicatricial">
                {t("SABER MAIS")}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.textComp}>
          <div className={styles.divideWin} style={{ paddingBottom: "0" }}>
            <div className={styles.images}>
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
            <div className={styles.feedback}>
              <h3>{t("FEEDBACK")}</h3>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("GIL GONÇALVES")}
              </h2>
              <p>{t("gilFeedback")}</p>
              <div className={styles.link}>
                <Link href="/contacto">{t("CONHECER MAIS")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourSpace}>
        <h2>{t("O NOSSO ESPAÇO")}</h2>
        <div className={styles.gallery}>
          {ourSpaceImages.map((img, index) => (
            <div
              key={img}
              className={styles.item}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.overlayGa}></div>

              <Image src={img} width={500} height={500} alt={img} />
            </div>
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={ourSpaceImages[currentImage]}
          nextSrc={ourSpaceImages[(currentImage + 1) % ourSpaceImages.length]}
          prevSrc={
            ourSpaceImages[
              (currentImage + ourSpaceImages.length - 1) % ourSpaceImages.length
            ]
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage(
              (currentImage + ourSpaceImages.length - 1) % ourSpaceImages.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % ourSpaceImages.length)
          }
        />
      )}
      <div className={styles.faq}>
        <div className={styles.overlay}></div>
        <div className={styles.divideFaq}>
          <Image src="/faq/deskin.jpeg" width={500} height={500} alt="FAQ" />
          <div className={styles.faqText}>
            <h2
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("FAQ")}
            </h2>
            <h3
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("conventionalVsHyperRealistic")}
            </h3>
            <p>{t("conventionalVsHyperRealisticAnswer")}</p>
            <h3
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("howLongDoesItLast")}
            </h3>
            <p>{t("howLongDoesItLastAnswer")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
