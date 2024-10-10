import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import styles from "./styles.module.css";
import Subtitle from "./Subtitle";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Subtitle />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
