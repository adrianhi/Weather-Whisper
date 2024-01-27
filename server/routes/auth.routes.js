import { Router } from "express";
import {
  register,
  login,
  logOut,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middleware/auth.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middleware/validator.middleware.js";
const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logOut", logOut);
router.get("/profile", authRequired, profile);

export default router;
