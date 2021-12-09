import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateJobsRepository } from "../../repositories/ICreateJobsRepository";

interface IRequest {
  id: number;
  title: string;
  description: string;
  payrate: number;
  location: string;
}

@injectable()
class UpdateJobPostingUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: ICreateJobsRepository
  ) {}
  async execute({
    id,
    title,
    description,
    payrate,
    location,
  }: IRequest): Promise<void> {
    const job = await this.jobsRepository.findById({ id });

    if (!job) {
      throw new AppError("Job not found");
    }
    this.jobsRepository.update({ id, title, description, payrate, location });
  }
}

export { UpdateJobPostingUseCase };
