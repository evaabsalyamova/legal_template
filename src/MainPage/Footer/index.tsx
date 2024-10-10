import { icons } from "../../icons";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.content}>
          {icons.time}
          <div className={styles.text}>Юридическая поддержка 24/7</div>
        </div>
        <div className={styles.content}>
          {icons.set}
          <div className={styles.text}>
            Множество возможностей в одном полисе
          </div>
        </div>
        <div className={styles.content}>
          {icons.bonus}
          <div className={styles.text}>Бонусы партнерской программы</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
