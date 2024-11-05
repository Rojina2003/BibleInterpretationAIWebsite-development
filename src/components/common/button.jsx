import PropTypes from "prop-types";

const Button = ({ type = "button", text, onClick, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#CA0E18] col-span-2 py-2 text-center w-full text-white font-albert-sans font-bold rounded-xl text-xs lg:text-lg"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
