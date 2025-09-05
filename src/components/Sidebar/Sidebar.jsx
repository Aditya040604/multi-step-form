import styles from "./Sidebar.module.css";
import Step from "../Step/Step";
import { steps } from "../../steps";
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {steps.map(({ number, label, title }) => (
        <Step
          number={number}
          label={label}
          title={title}
          isActive={false}
          key={number}
        />
      ))}
    </aside>
  );
}

export default Sidebar;
