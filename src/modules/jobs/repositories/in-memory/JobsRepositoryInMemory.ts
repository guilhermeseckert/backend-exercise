import { Jobs } from "../../entities/Jobs";
import { ICreateJobsRepository } from "../ICreateJobsRepository";

interface ICreateCategoryDTO {
  id: number;
  title: string;
  description: string;
  payrate: number;
  location: string;
}

class JobsRepositoryInMemory implements ICreateJobsRepository {
  jobs: Jobs[] = [];

  async update({
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<Jobs> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<Jobs[]> {
    const list = this.jobs;
    return list;
  }
  async create({
    id,
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<void> {
    const job = new Jobs();

    Object.assign(job, {
      id: this.jobs.length + 1,
      title,
      description,
      payrate,
      location,
    });

    this.jobs.push(job);
  }
  async delete({ id }: any): Promise<void> {
    const newJobs = this.jobs.filter((item) => item.id !== id);
    this.jobs = newJobs;
  }

  async findById({ id }: any): Promise<Jobs> {
    const job = this.jobs.find((job) => job.id === id);
    return job;
  }
}

export { JobsRepositoryInMemory };
