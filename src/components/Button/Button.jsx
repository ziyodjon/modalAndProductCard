import "./Button.css";
import clsx from "clsx";

export default function Button({ text, type, classes, click }) {
  return (
    <button type={type} className={clsx("btn", classes)} onClick={click}>
      {text}
    </button>
  );
}
