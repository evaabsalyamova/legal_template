import Advantage from "./Advantage";
import styles from "./styles.module.css";
import Support from "./Support";

const AdvantagePage = () => {
  return (
    <div className={styles.advantagePage}>
      <Advantage />
      <Support />
    </div>
  );
};

export default AdvantagePage;
