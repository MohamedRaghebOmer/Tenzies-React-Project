export default function Die(props: {
  id: string;
  value: number;
  isHeld: boolean;
  onClick: () => void;
}) {
  return (
    <button
      id={props.id.toString()}
      className={`die${props.isHeld ? " held" : ""}`}
      onClick={props.onClick}
      aria-label={`This is a die with a value of ${props.value}, and it is ${props.isHeld ? "held" : "not held"}. Click to ${props.isHeld ? "un-hold" : "hold"} this die.`}
      aria-pressed={props.isHeld}
    >
      {props.value}
    </button>
  );
}
