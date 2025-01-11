import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "../models/User";
import { Post } from "../models/Post";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [User, Post],
});

export default sequelize;
