import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController";
import asyncHandler from "../middlewares/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createPost));
router.get("/", asyncHandler(getPosts));
router.get("/:id", asyncHandler(getPostById));
router.put("/:id", asyncHandler(updatePost));
router.delete("/:id", asyncHandler(deletePost));

export default router;
