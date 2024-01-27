import { Router } from "express";
import { authRequired } from "../middleware/auth.middleware";

const router = Router();

router.get("/weather", authRequired);
router.delete("/weather", authRequired);

export default router;
