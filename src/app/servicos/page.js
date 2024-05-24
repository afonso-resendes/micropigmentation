"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import styles from "@/style/servicos.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Moveable } from "react-moveable";
import { FaBars } from "react-icons/fa"; // Exemplo de ícone
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import lightbox style
import { FaInstagram } from "react-icons/fa"; // Assuming FaInstagram is available

export default function Home() {
  const { t, i18n } = useTranslation();
  // State for the current index
  const [index, setIndex] = useState(0);

  // Your images in the slide directory
  const images = [
    "/cont/IMG_6460.jpg",
    "/cont/IMG_3234.jpg",

    // ...add all images from the slide directory
  ];
  const imagesSlider = [
    "/cont/IMG_3234.jpg",
    "/cont/IMG_5573.jpg",
    "/cont/falar.jpeg",
    "/cont/IMG_6742.jpg",
  ];

  const [sliderValue, setSliderValue] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Images for the "O NOSSO ESPAÇO" section
  const ourSpaceImages = [
    "/feedback/1.jpeg",
    "/feedback/1.jpeg",
    "/feedback/1.jpeg",
    "/feedback/1.jpeg",
    // Add more image URLs as needed
  ];

  // Function to open the lightbox at the specified image index
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

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
              style={{ objectPosition: "center" }}
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
          <h2>{t("OUR_SERVICES")}</h2>
          <h3>{t("HYPER_REALISTIC_MICROPIGMENTATION")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.dividePart}>
            <Image
              src="/capilar.jpg"
              width={500}
              height={500}
              alt={t("SCALP_MICROPIGMENTATION")}
            />
            <div className={styles.partText}>
              <h2>{t("SCALP_MICROPIGMENTATION")}</h2>

              <p>{t("SCALP_MICROPIGMENTATION_DESC")}</p>
              <Link href="/micropigmentacaocapilar" className={styles.mais}>
                {t("SEE_EXAMPLES")}
              </Link>
            </div>
          </div>
          <div className={styles.dividePart}>
            <Image
              src="/facial.jpg"
              width={500}
              height={500}
              alt={t("FACIAL_MICROPIGMENTATION")}
            />
            <div className={styles.partText}>
              <h2>{t("FACIAL_MICROPIGMENTATION")}</h2>

              <p>{t("FACIAL_MICROPIGMENTATION_DESC")}</p>
              <Link href="/micropigmentacaofacial" className={styles.mais}>
                {t("SEE_EXAMPLES")}
              </Link>
            </div>
          </div>
          <div className={styles.dividePart}>
            <Image
              src="/areata.jpg"
              width={500}
              height={500}
              alt={t("MEDICAL_MICROPIGMENTATION_AREATA")}
            />
            <div className={styles.partText}>
              <h2>{t("MEDICAL_MICROPIGMENTATION_AREATA")}</h2>

              <p>{t("MEDICAL_MICROPIGMENTATION_AREATA_DESC")}</p>
              <Link
                href="/micropigmentacaomedicaareata"
                className={styles.mais}
              >
                {t("SEE_EXAMPLES")}
              </Link>
            </div>
          </div>
          <div className={styles.dividePart}>
            <Image
              src="/cicatrical.jpg"
              width={500}
              height={500}
              alt={t("MEDICAL_MICROPIGMENTATION_SCAR")}
            />
            <div className={styles.partText}>
              <h2>{t("MEDICAL_MICROPIGMENTATION_SCAR")}</h2>

              <p>{t("MEDICAL_MICROPIGMENTATION_SCAR_DESC")}</p>
              <Link
                href="/micropigmentacaomedicacicatricial"
                className={styles.mais}
              >
                {t("SEE_EXAMPLES")}
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            background:
              " linear-gradient(0deg, rgb(0 ,0 ,0,1.78) 50%, rgba(0, 0, 0, 0) 74%);",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.divideSlider}>
            <ImageSlider images={imagesSlider} />
            <div className={styles.divideSliderText}>
              <h2>{t("KNOW_OUR_HISTORY")}</h2>
              <Link href="/quemsomos" className={styles.mais}>
                {t("Sabre mais")}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.jorge}>
          <div className={styles.divideJorge}>
            <div className={styles.overlay2}></div>
            <Image
              src="/faq/deskin.jpeg"
              width={500}
              height={500}
              alt="Jorge"
            />
            <div className={styles.partTextJorge}>
              <h2>Jorge</h2>
              <p>"{t("MY_EXPERIENCE_SPEAKS")}"</p>
              <Link href="/contato" className={styles.mais}>
                {t("Sabre mais")}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.textComp}>
          <h2 style={{ color: "#e4cb86b3;", paddingTop: "10px" }}>
            {t("WHY_CHOOSE_US")}
          </h2>
          <div className={styles.threedivText}>
            <div>
              <h3>{t("YEARS_OF_EXPERIENCE")}</h3>
              <p>{t("YEARS_OF_EXPERIENCE_DESC")}</p>
            </div>
            <div>
              <h3>{t("NATIONWIDE_SERVICE")}</h3>
              <p>{t("NATIONWIDE_SERVICE_DESC")}</p>
            </div>
            <div>
              <h3>{t("INTERNATIONAL_CERTIFIED_EXPERIENCE")}</h3>
              <p>{t("INTERNATIONAL_CERTIFIED_EXPERIENCE_DESC")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
