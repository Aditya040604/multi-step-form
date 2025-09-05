import styles from "./InputField.module.css";

function InputField({ label, type = "text", placeholder, handleChange }) {
  return (
    <div className={styles.inputfield}>
      <label htmlFor={type}>{label}</label> <br />
      <input
        onChange={handleChange}
        id={type}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
