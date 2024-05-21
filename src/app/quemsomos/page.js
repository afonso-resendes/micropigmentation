"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import styles from "@/style/quemsomos.module.css";
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
    "/cont/IMG_6593.jpg",
    "/cont/IMG_7105.jpg",
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
          <h2>{t("dreamStart")}</h2>
          <h3>{t("clinicDesc")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.divideFaq}>
            <div className={styles.faqText}>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("myStory")}
              </h2>
              <p>{t("storyText")}</p>
            </div>
            <Image
              src="/cont/feliz.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <ImageSlider images={imagesSlider} />
        <div className={styles.perspectiveContainer}>
          <div
            className={styles.tiltContainer}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <img src="/mobile.png" alt="Descriptive Alt Text" />
          </div>
        </div>
        <div
          className={styles.textComp}
          style={{ maxWidth: "350px", textAlign: "center" }}
        >
          <h3>{t("followUs")}</h3>
          <Image
            className={styles.logocomplete}
            src={"/logoComplete.png"}
            alt="logo"
            width={500}
            height={500}
          />
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaLogo}
          >
            <FaInstagram size={50} /> {/* Adjust size as needed */}
          </a>
        </div>
      </div>
    </main>
  );
}
