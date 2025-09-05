function NextButton({ text = "Next Step", onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default NextButton;
