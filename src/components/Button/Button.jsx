import PropTypes from "prop-types";
import "./Button.css";
import clsx from "clsx";

function Button({ text, type, classes, click }) {
  return (
    <button type={type} className={clsx("btn", classes)} onClick={click}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
