import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import asyncHandler from "../middlewares/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createUser));
router.get("/", asyncHandler(getUsers));
router.get("/:id", asyncHandler(getUserById));
router.put("/:id", asyncHandler(updateUser));
router.delete("/:id", asyncHandler(deleteUser));

export default router;
