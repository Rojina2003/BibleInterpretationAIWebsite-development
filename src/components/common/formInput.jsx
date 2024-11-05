/* eslint-disable react/prop-types */

const FormInput = ({
  heading="",
  type = "text",
  placeholder = "",
  ariaLabel = "",
  value,
  onChange,
  onBlur,
  error,
  touched,
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
        <h1 className="font-albert-sans font-medium text-xs lg:text-sm mb-2 " >{heading}</h1>
      <input
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`bg-[#F1F0EE] rounded-xl w-full py-2 px-4  ${error && touched ? "border-red-500" : ""}`}
        {...props}
      />
      {touched && error ? (
        <div className="text-red-500 text-xs lg:text-sm mt-1">{error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
