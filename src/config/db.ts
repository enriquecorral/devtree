import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    const url = `${connection.host}:${connection.port}`;

    console.log(colors.cyan.bold(`MongoDB conectado en ${url}`));
  }
  catch (error) {
    console.error(colors.bgRed.white.bold(`Error al conectar a la base de datos: ${error.message}`));
    process.exit(1); // Termina el proceso con un código de error
  }
};