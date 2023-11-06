import { Router } from "express";
import { ApiController } from "../controller/dashboard.api";

const router = Router()

router.get("/",ApiController.dashboardCounts)

export default router;