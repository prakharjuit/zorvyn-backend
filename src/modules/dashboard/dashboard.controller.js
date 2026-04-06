import { getSummary } from "./dashboard.service.js";

export const summary = async (req, res) => {
  const data = await getSummary();
  res.json(data);
};