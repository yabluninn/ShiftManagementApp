/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./TextareaWithLabel.css";

export default function TextareaWithLabel({
  placeholder,
  label,
  icon,
  value,
  onChange,
}) {
  return (
    <div className="textarea-container">
      <label>
        {icon && <i className={icon}></i>}
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
