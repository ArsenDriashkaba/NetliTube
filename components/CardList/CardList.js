import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import classNames from "classnames";

import Card from "./Card/Card";

import styles from "./CardList.module.css";

const cardSizeClassMap = {
  small: styles.smallCardWrapper,
  medium: styles.mediumCardWrapper,
  large: styles.largeCardWrapper,
};

const titleSizeClassMap = {
  small: styles.smallListTitle,
  medium: styles.mediumListTitle,
  large: styles.largeListTitle,
};

const CardList = ({
  listTitle,
  cards,
  numberPerRow,
  cardSize,
  autoPlayDelay,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={classNames(styles.title, titleSizeClassMap[cardSize])}>
        {listTitle}
      </h2>
      <Swiper
        className={cardSizeClassMap[cardSize]}
        slidesPerView={numberPerRow}
        slid
        spaceBetween={5}
        modules={[Autoplay]}
        autoplay={{ delay: autoPlayDelay }}
        loop
      >
        {cards?.map((card, index) => (
          <SwiperSlide className={styles.card} key={index}>
            <Card size={cardSize} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
