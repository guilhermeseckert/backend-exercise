import { JobsRepositoryInMemory } from "../../repositories/in-memory/JobsRepositoryInMemory";
import { CreateJobsUseCase } from "./CreateJobPostingUseCase";

let createJobUseCase: CreateJobsUseCase;
let jobsRepositoryInMemory: JobsRepositoryInMemory;

describe("create posting", () => {
  beforeAll(() => {
    jobsRepositoryInMemory = new JobsRepositoryInMemory();
    createJobUseCase = new CreateJobsUseCase(jobsRepositoryInMemory);
  });
  it("Should be able to create new job posting", async () => {
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

    const jobPosting = await jobsRepositoryInMemory.findById({ id });

    expect(jobPosting).toHaveProperty("id");
  });
});
