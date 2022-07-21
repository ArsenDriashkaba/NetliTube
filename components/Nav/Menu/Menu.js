import MenuOption from "../MenuOption/MenuOption";

import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.optionList}>
        <MenuOption optionText="Home" />
        <MenuOption optionText="About" />
        <MenuOption optionText="Contact" />
      </ul>
    </div>
  );
};

export default Menu;
