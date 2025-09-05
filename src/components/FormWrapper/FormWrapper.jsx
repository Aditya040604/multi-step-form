import { useState } from "react";

import styles from "./FormWrapper.module.css";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import SelectPlan from "../SelectPlan/SelectPlan";
import AddOns from "../AddOns/AddOns";
import Summary from "../Summary/Summary";
function FormWrapper() {
  const [step, setStep] = useState(1);
  function handleNextStep() {
    if (step >= 4) return;

    setStep((prev) => prev + 1);
  }
  function handlePrevStep() {
    if (step <= 0) return;
    setStep((prev) => prev - 1);
  }
  return (
    <section className={styles.section}>
      {step == 1 && <PersonalInfoForm handleNextStep={handleNextStep} />}
      {step == 2 && (
        <SelectPlan
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step == 3 && (
        <AddOns
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step == 4 && (
        <Summary
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
    </section>
  );
}

export default FormWrapper;
