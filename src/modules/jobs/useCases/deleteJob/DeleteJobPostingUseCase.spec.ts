import { AppError } from "../../../../errors/AppError";
import { JobsRepositoryInMemory } from "../../repositories/in-memory/JobsRepositoryInMemory";
import { CreateJobsUseCase } from "../createJob/CreateJobPostingUseCase";
import { DeleteJobPostingUseCase } from "./DeleteJobPostingUseCase";

let createJobUseCase: CreateJobsUseCase;
let jobsRepositoryInMemory: JobsRepositoryInMemory;
let deleteJobUseCase: DeleteJobPostingUseCase;

describe("Delete job", () => {
  beforeAll(() => {
    jobsRepositoryInMemory = new JobsRepositoryInMemory();
    createJobUseCase = new CreateJobsUseCase(jobsRepositoryInMemory);
    deleteJobUseCase = new DeleteJobPostingUseCase(jobsRepositoryInMemory);
  });
  it("Should be able to delete job ", async () => {
    const id = 1;
    const job = {
      title: "New job posting",
      description: "new job description",
      payrate: 100,
      location: "canada",
    };
    await createJobUseCase.execute({
      title: job.title,
      description: job.description,
      payrate: job.payrate,
      location: job.location,
    });

    await deleteJobUseCase.execute({ id });

    const jobPosting = await jobsRepositoryInMemory.findById({ id });

    expect(jobPosting).toBeUndefined();
  });

  it("Should not be able to delete job if doesn't exist", async () => {
    expect(async () => {
      const id = 3;
      await deleteJobUseCase.execute({ id });
    }).rejects.toBeInstanceOf(AppError);
  });
});
