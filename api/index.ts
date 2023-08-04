import { sequelize } from "./db"; // Ajusta la ruta si es necesario
import server from "./src/app"; // Ajusta la ruta si es necesario
import dotenv from "dotenv";
const port = process.env.PORT || 3001

dotenv.config();

// Sincronizar la base de datos y levantar el servidor
sequelize.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
});
