import Image from "next/image";

import styles from "./Logo.module.css";

const Logo = ({ icoUrl }) => {
  return (
    <div className={styles.container}>
      <Image src={icoUrl} alt="Logo Icon" width={64} height={64} />
      <h1 className={styles.logoText}>NetliTube</h1>
    </div>
  );
};

export default Logo;
