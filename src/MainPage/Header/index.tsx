import { icons } from "../../icons";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <div>{icons.logo}</div>
        <div className={styles.title}>
          Первый цифровой международный юридический центр
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contact}>8 (800) 511-37-68</div>
        <button className={styles.login}>Войти</button>
      </div>
      <div className={styles.mobileButtons}>
        <button className={styles.headerInfo}>{icons.phone}</button>
        <button className={styles.headerNav}>{icons.navigation}</button>
      </div>
    </div>
  );
};

export default Header;
