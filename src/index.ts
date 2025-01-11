import express, { Application } from "express";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler"; // Importa el middleware de manejo de errores

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);

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
