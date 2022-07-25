import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import styles from "./Slide.module.css";

const Slide = ({ imgSrc }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={imgSrc}
        alt="Banner Image"
        width={1920}
        height={550}
        layout="responsive"
      />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          ducimus vitae dolorem obcaecati non sed veritatis ratione deleniti ad
          veniam.
        </p>
        <button className={styles.watchButton}>Watch</button>
      </div>
    </div>
  );
};

export default Slide;
