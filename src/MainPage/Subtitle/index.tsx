import styles from "./styles.module.css";

const Subtitle = () => {
  return (
    <div className={styles.subTitle}>
      <ul className={styles.subtitleList}>
        <li>
          <a href="#!" className={styles.subLink}>
            О компании
          </a>
        </li>
        <li>
          <a href="#!" className={styles.subLink}>
            Услуги
          </a>
        </li>
        <li>
          <a href="#!" className={styles.subLink}>
            Sirius
          </a>
        </li>
        <li>
          <a href="#!" className={styles.subLink}>
            Тарифы
          </a>
        </li>
        <li>
          <a href="#!" className={styles.subLink}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#!" className={styles.subLink}>
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Subtitle;
