import { motion, transform } from "framer-motion";
import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = ({ icoUrl }) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Image src={icoUrl} alt="Logo Icon" width={48} height={48} />
      </motion.div>
      <h1 className={styles.logoText}>NetliTube</h1>
    </div>
  );
};

export default Logo;
