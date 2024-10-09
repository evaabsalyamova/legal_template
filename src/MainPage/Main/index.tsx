import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.mainText}>
        <div className={styles.title}>
          Юридический полис ILC — быстрое решение сложных вопросов 24/7
        </div>
        <div className={styles.subTitle}>
          Ваша личная команда профессиональных юристов, которая всегда под
          рукой. А также доступ к бонусам партнерской программы — доход до $260
          с каждого полиса, купленного по вашему приглашению.
        </div>
        <button className={styles.button}>Попробовать бесплатно</button>
      </div>
      <div className={styles.logoBlock}>
        <img
          src="https://pics.st/7e9/b7f/82cfcbee.png"
          alt="logo"
          width={438}
          height={488}
        />
      </div>
    </div>
  );
};

export default Main;
