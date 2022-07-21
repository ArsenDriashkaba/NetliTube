import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./MenuOption.module.css";

const MenuOption = ({ optionText, href }) => {
  return (
    <motion.li whileHover={{ y: -5 }} className={styles.option}>
      <Link href={"/"} passHref>
        <a>{optionText}</a>
      </Link>
    </motion.li>
  );
};

export default MenuOption;
