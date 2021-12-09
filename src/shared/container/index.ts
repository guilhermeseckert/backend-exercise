import { container } from "tsyringe";

import { ICreateJobsRepository } from "../../modules/jobs/repositories/ICreateJobsRepository";
import { JobsRepository } from "../../modules/jobs/repositories/implementations/JobsRepository";

container.registerSingleton<ICreateJobsRepository>(
  "JobsRepository",
  JobsRepository
);
