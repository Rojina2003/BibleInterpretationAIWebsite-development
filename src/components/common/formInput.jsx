/* eslint-disable react/prop-types */

const FormInput = ({
  heading="",
  type = "text",
  placeholder = "",
  name,
  ariaLabel = "",
  value,
  onChange,
  onBlur,
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
        <h1 className="font-albert-sans font-medium text-xs lg:text-sm mb-2 " >{heading}</h1>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="bg-[#F1F0EE] rounded-lg w-full py-2 px-4   "
        {...props}
      />
     
    </div>
  );
};

export default FormInput;
