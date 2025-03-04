import React from "react";

const InputField = ({ id, label, placeholder, value, onChange, maxLength }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputField;
