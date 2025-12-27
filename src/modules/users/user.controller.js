import { createUser, getAllUsers } from "./user.service.js";

export const create = async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
};

export const getAll = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};
