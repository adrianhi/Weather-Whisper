import { Router } from "express";
import { register, login, logOut } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logOut", logOut);

export default router;
