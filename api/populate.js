/* eslint-disable */

const fs = require("fs");

const Budget = require("./budget.js");
const Category = require("./category.js");
const Expense = require("./expense.js");

let savedData = null;

const readData = () => {
  // cache posts after reading them once
  if (!savedData) {
    const contents = fs.readFileSync("data.json", "utf8");
    savedData = JSON.parse(contents);
  }
  return savedData;
};

const populateData = () => {
  // TODO: implement this
  const allData = readData();
  const promises = allData.map(p => new Budget(p).save());
  return Promise.all(promises);
};

module.exports = { readData, populateData };
