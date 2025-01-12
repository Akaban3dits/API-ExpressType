import { Request, Response } from "express";
import { Post } from "../models/Post";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;
    const post = await Post.create({ title, content, userId });

    res.status(201).json({ post });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred " });
    }
  }
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    res.json({ posts });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error ocurred" });
    }
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ post });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error ocurred" });
    }
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "User not found" });

    post.title = title || post.title;
    post.content = content || post.content;
    await post.save();
    res.json({ post });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error ocurred" });
    }
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    await post.destroy();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error ocurred" });
    }
  }
};
