import UserInput from "./UserInput";
import Result from "./Result";
import { useState } from "react";

const initialValue = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};
function App() {
  const [userInput, setUserInput] = useState(initialValue);

  function handleInputChange(key, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [key]: +newValue,
      };
    });
  }
  
  return (
    <div>
      <header id="header">
        <img src="src/assets/investment-calculator-logo.png" />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      <Result userInput={userInput} />
    </div>
  );
}

export default App;
