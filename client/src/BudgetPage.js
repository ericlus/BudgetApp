import React from "react";
import BudgetBadge from "./BudgetBadge.js";

const BudgetPage = ({ handlePlusClick, budgets, handleBudgetClick }) => {
  return (
    <div>
      <h1>My Budgets</h1>
      {budgets.map(budget => (
        <BudgetBadge
          key={budget.id}
          budget={budget}
          handleBudgetClick={handleBudgetClick}
        />
      ))}
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
};

export default BudgetPage;
