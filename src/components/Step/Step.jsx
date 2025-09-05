import styles from "./Step.module.css";

function Step({ number, label, title, isActive }) {
  return (
    <div className={styles.step}>
      <div className={`${styles.circle} ${isActive ? styles.active : ""}`}>
        {number}
      </div>
      <div className={styles.text}>
        <span>{label}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Step;
