import express, { Application } from "express";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import errorHandler from "./middlewares/errorHandler";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa!");

    await sequelize.sync();
    console.log("Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos: ", error);
  }
};

startServer();
