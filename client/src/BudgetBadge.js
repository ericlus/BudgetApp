import React from "react";

const BudgetBadge = ({ budget, handleBudgetClick }) => {
  return (
    <div className="budget-badge" onClick={() => handleBudgetClick(budget)}>
      <h3>{budget.name}</h3>
      <h4>${budget.expected_income}</h4>
      <p>
        <strong>Start:</strong> {new Date(budget.start_date).toString()}
      </p>
      <p>
        <strong>End:</strong> {new Date(budget.end_date).toString()}
      </p>
    </div>
  );
};

export default BudgetBadge;
