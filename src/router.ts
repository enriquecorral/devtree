import { Router } from "express";
import { body } from "express-validator"
import { createAccount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import type { RequestHandler } from "express";

const router = Router();

/* Autenticación y Registro */
router.post("/auth/register", 
  body("handle")
    .notEmpty()
    .withMessage("El nombre de usuario no puede ir vacío"),
  body("name")
    .notEmpty()
    .withMessage("El nombre no puede ir vacío"),
  body("email")
    .isEmail()
    .withMessage("El email no es válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña es muy corta, mínimo 8 caracteres"),
  handleInputErrors as RequestHandler,
  (req, res, next) => {
    Promise.resolve(createAccount(req, res)).catch(next);
  })

router.post("/auth/login", 
    body("email")
    .isEmail()
    .withMessage("El email no es válido"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
  handleInputErrors as RequestHandler,
  (req, res, next) => {
    Promise.resolve(login(req, res)).catch(next);
  }
);

export default router;