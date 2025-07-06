import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = "mongodb+srv://enriquecorral97:esL5jW6n0WH0pwRC@cluster0.udeuez9.mongodb.net/linkedtree_node_typescript";
    const { connection } = await mongoose.connect(url)
    const url2 = `${connection.host}:${connection.port}`;

    console.log(`MongoDB conectado en ${url2}`);
  }
  catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Termina el proceso con un código de error
  }
};