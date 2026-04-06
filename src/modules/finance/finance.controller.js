import * as service from "./finance.service.js";

export const createFinance = async (req, res) => {
  const data = await service.createFinance({
    ...req.body,
    createdBy: req.user.id,
  });
  res.json(data);
};

export const getFinances = async (req, res) => {
  const result = await service.getFinances(req.query);
  res.json(result);
};

export const updateFinance = async (req, res) => {
  const data = await service.updateFinance(req.params.id, req.body);
  res.json(data);
};

export const deleteFinance = async (req, res) => {
  await service.deleteFinance(req.params.id);
  res.json({ message: "Deleted" });
};