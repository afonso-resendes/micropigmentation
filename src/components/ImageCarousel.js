import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a CSS import
import styles from "../style/ImageSlider.module.css"; // Import your CSS module for styling

const ImageSlider = ({ images }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleChange = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className={styles.sliderCar}>
      <Carousel
        selectedItem={selectedItem}
        onChange={handleChange}
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className={styles.imageCar} />
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default ImageSlider;
