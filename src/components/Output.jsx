import React from "react";

const Output = ({ day, month, year, code, error }) => {
  const generatePassword = () => {
    const dateStr = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
    return code
      .split("")
      .map((digit) => dateStr[parseInt(digit, 10) - 1] || "")
      .join("");
  };

  if (!day || !month || !year || !code || error) return null;

  return (
    <div className="output">
      <strong>Generated Password:</strong> {generatePassword()}
    </div>
  );
};

export default Output;
