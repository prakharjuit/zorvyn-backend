import * as authService from "./auth.service.js";

export const register = async (req, res) => {
  const user = await authService.registerUser(req.body);
  res.json(user);
};

export const login = async (req, res) => {
  const data = await authService.loginUser(
    req.body.email,
    req.body.password
  );
  res.json(data);
};