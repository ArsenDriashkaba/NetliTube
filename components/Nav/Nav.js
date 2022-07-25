import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Logo icoUrl="/static/icons/playIco.svg" />
        <Menu />
      </nav>
    </div>
  );
};

export default Nav;
