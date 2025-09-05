import GoBackButton from "../GoBackButton/GoBackButton";
import NextButton from "../NextButton/NextButton";

function AddOns({ handlePrevStep, handleNextStep }) {
  return (
    <div>
      <h1>Add on</h1>
      <GoBackButton onClick={handlePrevStep} />
      <NextButton onClick={handleNextStep} />
    </div>
  );
}

export default AddOns;
