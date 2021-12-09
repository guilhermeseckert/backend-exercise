import { Router } from "express";
import { jobsRouter } from "./jobs.routes";

const router = Router();

router.use("/job", jobsRouter);

export { router };
