import GoBackButton from "../GoBackButton/GoBackButton";
import NextButton from "../NextButton/NextButton";

function Summary({ handlePrevStep, handleNextStep }) {
  return (
    <div>
      <h1>Summary</h1>
      <GoBackButton onClick={handlePrevStep} />
      <NextButton text="Confirm" onClick={handleNextStep} />
    </div>
  );
}

export default Summary;
