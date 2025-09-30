import { Router } from "express";
import type { RequestHandler } from "express";
import { body } from "express-validator";
import { createAccount, getUser, login, updateProfile } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router = Router();

/* Autenticación y Registro */
router.post(
  "/auth/register",
  body("handle")
    .notEmpty()
    .withMessage("El nombre de usuario no puede ir vacío"),
  body("name").notEmpty().withMessage("El nombre no puede ir vacío"),
  body("email").isEmail().withMessage("El email no es válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña es muy corta, mínimo 8 caracteres"),
  handleInputErrors as RequestHandler,
  (req, res, next) => {
    Promise.resolve(createAccount(req, res)).catch(next);
  }
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("El email no es válido"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
  handleInputErrors as RequestHandler,
  (req, res, next) => {
    Promise.resolve(login(req, res)).catch(next);
  }
);

router.get("/user", authenticate as any, getUser as RequestHandler);

router.patch(
  "/user",
  body("handle")
    .notEmpty()
    .withMessage("El nombre de usuario no puede ir vacío"),
  body("description")
    .notEmpty()
    .withMessage("La descripción no puede ir vacía"),
  authenticate as any,
  updateProfile as any
);

export default router;
