"use client";
import React, { useState } from "react";
import "react-image-lightbox/style.css"; // Import lightbox style
import styles from "@/style/contacto.module.css";
import Lightbox from "react-image-lightbox";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const handleSubmit = (event) => {
    // Here you can add what happens when the form is submitted,
    // e.g., sending the data to a server or displaying a message to the user.
  };
  const [index, setIndex] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const ourSpaceImages = [
    "/pig.jpeg",
    "/men.jpeg",
    "/IMG_6098.jpg",
    "/IMG_6104.jpg",
    "/IMG_2640-scaled.jpg",
    "/IMG_8314.jpg",
    "/Peachy_Photo.jpg",
    "/feliz.jpg",
    // Add more image URLs as needed
  ];
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <main>
      <div className={styles.window}>
        <div className={styles.divide}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30624.955576268163!2d-9.099935!3d38.761259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1931820706b231%3A0x7461f66b265bec9e!2sR.%20Nova%20dos%20Mercadores%2019b%2C%201990-221%20Lisboa%2C%20Portugal!5e1!3m2!1spt-PT!2sus!4v1708453491813!5m2!1spt-PT!2sus"
              style={{ border: 0, width: "100%", height: "300px" }} // Corrected style passing
              allowFullScreen // Corrected attribute
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Corrected attribute
            ></iframe>
          </div>
          <div className={styles.divide}>
            <div>
              <h2>{t("CONTACTS")}</h2>
              <p>
                {t("PHONE")}: <br /> +351 968 259 600
                <br /> {t("EMAIL")}:
                <br /> Jmicropigmentation@gmail.com
              </p>
            </div>
            <div>
              <h2>{t("ADDRESS")}</h2>
              <p>{t("MAP_ADDRESS")}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit()} className={styles.form}>
          <label htmlFor="name">
          {t('YOUR_NAME')}
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('PLACEHOLDER_NAME')}
              style={{ width: "100%", padding: "10px" }}
              required
            />
          </label>
          <label htmlFor="email" style={{ display: "block", margin: "10px 0" }}>
          {t('YOUR_EMAIL')}
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('PLACEHOLDER_EMAIL')}
              style={{ width: "100%", padding: "10px" }}
              required
            />
          </label>
          <label
            htmlFor="message"
            style={{ display: "block", margin: "10px 0" }}
          >
            {t('YOUR_MESSAGE')}
            <textarea
              id="message"
              name="message"
              placeholder={t('PLACEHOLDER_MESSAGE')}
              style={{ width: "100%", height: "150px", padding: "10px" }}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            style={{ padding: "10px 20px", margin: "10px 0" }}
          >
            {t('SEND')}
          </button>
        </form>
        <div className={styles.gallery}>
          {ourSpaceImages.map((img, index) => (
            <div
              key={img}
              className={styles.item}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.overlay}></div>
              <Image
                src={img}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={ourSpaceImages[currentImage]}
            nextSrc={ourSpaceImages[(currentImage + 1) % ourSpaceImages.length]}
            prevSrc={
              ourSpaceImages[
                (currentImage + ourSpaceImages.length - 1) %
                  ourSpaceImages.length
              ]
            }
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setCurrentImage(
                (currentImage + ourSpaceImages.length - 1) %
                  ourSpaceImages.length
              )
            }
            onMoveNextRequest={() =>
              setCurrentImage((currentImage + 1) % ourSpaceImages.length)
            }
          />
        )}
      </div>
      
    </main>
  );
}
