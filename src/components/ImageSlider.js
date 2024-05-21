// components/ImageSlider.js
import React, { useState, useEffect } from "react";
import styles from "../style/ImageSlider.module.css"; // Ensure your CSS module is correctly imported

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Automatically slide images
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((current) => (current + 1) % (length - 2));
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [length]);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrent(current === length - 3 ? 0 : current + 1);
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 3 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <button className={styles.leftArrow} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.sliderInner} style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
        {images.map((image, index) => (
          <div className={styles.imgSlide} key={index}>
            <img src={image} alt={`Slide ${index}`} className={styles.image} />
          </div>
        ))}
      </div>
      <button className={styles.rightArrow} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
