import styles from "./PersonalInfoForm.module.css";

import InputField from "../InputField/InputField";
import NextButton from "../NextButton/NextButton";
import { Fragment, useState } from "react";

function PersonalInfoForm({ handleNextStep }) {
  const [form, setForm] = useState({
    text: "",
    email: "",
    tel: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // remove error when user types
    setErrors({ ...errors, [name]: "" });
  };
  const validateInputs = () => {
    let newErrors = {};

    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
  };

  const fields = [
    { label: "Name", placeholder: "e.g. Stephen King", type: "text" },
    {
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      type: "email",
    },
    { label: "Phone Number", placeholder: "e.g. +1 234 567 890", type: "tel" },
  ];

  return (
    <section className={styles.form}>
      <div>
        <h1>Personal Info</h1>
        <span>Please provide your name, email, and phone number.</span>
      </div>
      {fields.map(({ label, placeholder, type }) => (
        <Fragment key={label}>
          {errors[type] && <p>This field is required</p>}
          <InputField
            label={label}
            placeholder={placeholder}
            type={type}
            handleChange={handleChange}
          />
        </Fragment>
      ))}
      <NextButton
        text="Next Step"
        onClick={handleNextStep}
        validateInputs={validateInputs}
      />
    </section>
  );
}

export default PersonalInfoForm;
