function PlanCard({ imgSrc, type, amount }) {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <div>
        <span>{type}</span>
        <span>{amount}</span>
      </div>
    </div>
  );
}

export default PlanCard;
