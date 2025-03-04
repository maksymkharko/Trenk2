import React, { useState } from "react";
import InputField from "./InputField";
import Output from "./Output";
import "../styles/App.css";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const validateInput = (value, min, max, fieldName) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return `${fieldName} must be a number`;
    if (num < min || num > max) return `${fieldName} must be between ${min} and ${max}`;
    return null;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let errorMessage = "";

    if (id === "day") errorMessage = validateInput(value, 1, 31, "Day");
    if (id === "month") errorMessage = validateInput(value, 1, 12, "Month");
    if (id === "year") errorMessage = validateInput(value, 1900, 2100, "Year");
    if (id === "code" && (value.length !== 4 || isNaN(value))) {
      errorMessage = "Code must be 4 digits";
    }

    setError(errorMessage);

    if (id === "day") setDay(value);
    if (id === "month") setMonth(value);
    if (id === "year") setYear(value);
    if (id === "code") setCode(value);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="form">
        <InputField
          id="day"
          label="Day"
          placeholder="DD"
          value={day}
          onChange={handleInputChange}
          maxLength={2}
        />
        <InputField
          id="month"
          label="Month"
          placeholder="MM"
          value={month}
          onChange={handleInputChange}
          maxLength={2}
        />
        <InputField
          id="year"
          label="Year"
          placeholder="YYYY"
          value={year}
          onChange={handleInputChange}
          maxLength={4}
        />
        <InputField
          id="code"
          label="Code"
          placeholder="4-digit code"
          value={code}
          onChange={handleInputChange}
          maxLength={4}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <Output day={day} month={month} year={year} code={code} error={error} />
    </div>
  );
};

export default App;
