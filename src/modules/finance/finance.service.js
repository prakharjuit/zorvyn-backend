import Finance from "./finance.model.js";

export const createFinance = (data) => Finance.create(data);

export const getFinances = async (queryParams) => {
  const { page = 1, limit = 10, type, category } = queryParams;

  const filter = {};

  // Filtering
  if (type) filter.type = type;
  if (category) filter.category = category;

  const skip = (page - 1) * limit;

  const data = await Finance.find(filter)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Finance.countDocuments(filter);

  return {
    total,
    page: Number(page),
    totalPages: Math.ceil(total / limit),
    data,
  };
};

export const updateFinance = (id, data) =>
  Finance.findByIdAndUpdate(id, data, { new: true });

export const deleteFinance = (id) =>
  Finance.findByIdAndDelete(id);