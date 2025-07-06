import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    const url = `${connection.host}:${connection.port}`;

    console.log(`MongoDB conectado en ${url}`);
  }
  catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Termina el proceso con un código de error
  }
};