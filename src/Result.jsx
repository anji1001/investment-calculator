import { formatter } from "./util/investment";
import { calculateInvestmentResults } from "./util/investment";

export default function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest(Year)</th>
          <th>Investment Value</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
