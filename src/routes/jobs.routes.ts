import { Router } from "express";
import { CreateJobController } from "../modules/jobs/useCases/createJob/CreateJobController";
import { ListJobsController } from "../modules/jobs/useCases/listJobs/ListJobsController";
import { DeleteJobController } from "../modules/jobs/useCases/deleteJob/DeleteJobController";
import { UpdateJobPostingController } from "../modules/jobs/useCases/updateJob/UpdateJobPostingController";
import { celebrate, Segments, Joi } from "celebrate";

export const jobsRouter = Router();
const createJobController = new CreateJobController();
const listJobsController = new ListJobsController();
const deleteJobController = new DeleteJobController();
const updateJobPostingController = new UpdateJobPostingController();

jobsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      location: Joi.string().required(),
      payrate: Joi.number().required(),
    },
  }),
  createJobController.handle
);
jobsRouter.get("/", listJobsController.handle);
jobsRouter.delete("/", deleteJobController.handle);
jobsRouter.put("/", updateJobPostingController.handle);
