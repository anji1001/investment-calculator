export default function UserInput({ userInput, handleInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          INITIAL INVESTMENT
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
          />
        </label>
        <label>
          ANNUAL INVESTMENT
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
          />
        </label>
        <label>
          DURATION
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          />
        </label>
      </div>
    </div>
  );
}
