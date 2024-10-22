import styles from "./styles.module.css";

const Support = () => {
  return (
    <div className={styles.support}>
      <div className={styles.heading}>Даём поддержку</div>
      <div className={styles.headingBlock}>
        <div className={styles.headingInfo}>
          <img
            src="https://pics.st/90e/bea/22a84b25.png"
            alt="team"
            width={159}
            height={128}
          />
          <div className={styles.title}>Бизнесу</div>
          <div className={styles.subTitle}>
            Услуги профессиональных юристов для вашей компании по фиксированному
            тарифу — это в несколько раз выгоднее, чем содержать свой штат.
          </div>
        </div>
        <div className={styles.headingInfo}>
          <img
            src="https://pics.st/9c0/89c/2c45ad89.png"
            alt="team"
            width={159}
            height={128}
          />
          <div className={styles.title}>StartUP проектам</div>
          <div className={styles.subTitle}>
            Эксперты ILC помогут выбрать оптимальную правовую форму для ведения
            бизнеса, оптимизировать налоги и подготовить необходимый пакет
            документов.
          </div>
        </div>
        <div className={styles.headingInfo}>
          <img
            src="https://pics.st/ff8/a0c/f3eeb0d7.png"
            alt="team"
            width={159}
            height={128}
          />
          <div className={styles.title}>Частным клиентам</div>
          <div className={styles.subTitle}>
            Оперативные решения сложных вопросов в режиме онлайн: ДТП,
            наследство, страховые споры, земельные и имущественные процессы,
            защита прав.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
