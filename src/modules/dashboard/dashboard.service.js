import Finance from "../finance/finance.model.js";

export const getSummary = async () => {
  const income = await Finance.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  const expense = await Finance.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return {
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    netBalance: (income[0]?.total || 0) - (expense[0]?.total || 0),
  };
};