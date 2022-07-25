import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";

import styles from "./Card.module.css";

const Card = ({ imgSrc, size }) => {
  const sizeClassMap = {
    small: styles.smallImg,
    medium: styles.mediumImg,
    large: styles.largeImg,
  };

  return (
    <motion.div
      className={classNames(styles.imageContainer, sizeClassMap[size])}
      whileHover={{ scale: 1.2 }}
    >
      <Image
        className={styles.image}
        src={imgSrc || "/static/images/banner.jpeg"}
        alt="image"
        layout="fill"
      />
    </motion.div>
  );
};

export default Card;
