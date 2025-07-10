import { Router } from "express";
import User from "./models/User";

const router = Router();

/* Autenticación y Registro */
router.post("/auth/register", async (req, res) => {
  await User.create(req.body)

  res.send("Registro creado correctamente");
});


export default router;