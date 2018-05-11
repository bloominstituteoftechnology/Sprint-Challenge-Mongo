import React from "react";

const BudgetCard = props => {
  return (
    <div>
      <div>Name: {props.mainProp.title}</div>
      <div>Current Budget: ${props.mainProp.budgetAmount}</div>
      <br />
    </div>
  );
};

export default BudgetCard;
