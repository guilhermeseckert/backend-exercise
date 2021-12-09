import { getRepository, Repository } from "typeorm";

import { Jobs } from "../../entities/Jobs";
import { ICreateJobsRepository } from "../ICreateJobsRepository";

interface ICreateCategoryDTO {
  id: number;
  title: string;
  description: string;
  payrate: number;
  location: string;
}

class JobsRepository implements ICreateJobsRepository {
  private repository: Repository<Jobs>;
  constructor() {
    this.repository = getRepository(Jobs);
  }

  async create({
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<void> {
    const job = await this.repository.create({
      title,
      description,
      payrate,
      location,
    });
    await this.repository.save(job);
  }
  async list(): Promise<Jobs[]> {
    const jobs = await this.repository.find();
    return jobs;
  }
  async update({
    id,
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<Jobs> {
    const job = await this.repository.findOne({ id });

    if (!job) {
      throw new Error("Job not found");
    }

    job.title = title;
    job.description = description;
    job.payrate = payrate;
    job.location = location;

    await this.repository.save(job);

    return job;
  }

  async delete({ id }: any): Promise<void> {
    const job = await this.repository.findOne({ id });

    if (!job) {
      throw new Error("Job not found");
    }

    await this.repository.remove(job);
  }

  async findById({ id }: any): Promise<Jobs> {
    const job = await this.repository.findOne(id);

    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  }
}
export { JobsRepository };
