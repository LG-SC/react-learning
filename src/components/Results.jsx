import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

function Results({ inputCollection }) {
    const resultsData = calculateInvestmentResults(inputCollection);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment
    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment (Year)</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map(
                        (yearData) => {
                            const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initialInvestment;
                            const totalInvested = yearData.valueEndOfYear - initialInvestment;
                            return (
                                <tr key={yearData.year}>
                                    <td>{yearData.year}</td>
                                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                    <td>{formatter.format(yearData.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalInvested)}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </>
    );
}
Results.propTypes = {
    inputCollection: Object,
}
export default Results; 