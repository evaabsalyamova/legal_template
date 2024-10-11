import { icons } from "../../icons";
import styles from "./styles.module.css";

const Advantage = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.info}>
        <div>{icons.newLogo}</div>
        <div className={styles.title}>Ваша личная online команда юристов</div>
        <div className={styles.subtitle}>
          Мы предоставляем комплексный консалтинговый сервис с полисной системой
          обслуживания для частных клиентов и для бизнеса, с использованием
          новейших цифровых технологий.
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.top}>
          <div className={styles.background}>
            {icons.hundred}
            <div className={styles.imagesTitle}>Клиентов по всему миру</div>
          </div>
          <div className={styles.background}>
            {icons.fifteen}
            <div className={styles.imagesTitle}>Опытных юристов в штате </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.background}>
            {icons.fifty}
            <div className={styles.imagesTitle}>Клиентов по всему миру</div>
          </div>
          <div className={styles.background}>
            {icons.sirius}
            <div className={styles.imagesTitle}>Опытных юристов в штате </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
