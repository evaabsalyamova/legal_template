import Header from "./Header";
import styles from "./styles.module.css";
import Subtitle from "./Subtitle";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Subtitle />
    </div>
  );
};

export default MainPage;
