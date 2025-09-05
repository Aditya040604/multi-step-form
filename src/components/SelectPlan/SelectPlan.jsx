import NextButton from "../NextButton/NextButton";
import PlanCard from "../PlanCard/PlanCard";
import GoBackButton from "../GoBackButton/GoBackButton";

function SelectPlan({ handleNextStep, handlePrevStep }) {
  const plans = [
    {
      type: "Arcade",
      amount: "$9/month",
      imgSrc: "/assets/images/icon-arcade.svg",
    },
    {
      type: "Advanced",
      amount: "$2/mo",
      imgSrc: "/assets/images/icon-advanced.svg",
    },
    { type: "Pro", amount: "$15/mo", imgSrc: "/assets/images/icon-pro.svg" },
  ];
  return (
    <section>
      <h1>Select your plan</h1>
      <span>You have the option of monthly or yearly billing.</span>
      {plans.map((plan) => (
        <PlanCard
          type={plan.type}
          amount={plan.amount}
          imgSrc={plan.imgSrc}
          key={plan.type}
        />
      ))}
      <GoBackButton onClick={handlePrevStep} />
      <NextButton text="Next Step" onClick={handleNextStep} />
    </section>
  );
}

export default SelectPlan;
