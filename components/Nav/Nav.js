import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <Logo icoUrl="/static/icons/playIco.svg" />
      <Menu />
    </nav>
  );
};

export default Nav;
