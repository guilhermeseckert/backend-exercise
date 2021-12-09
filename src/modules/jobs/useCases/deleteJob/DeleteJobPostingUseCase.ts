import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateJobsRepository } from "../../repositories/ICreateJobsRepository";

interface IRequest {
  id: number;
}

@injectable()
class DeleteJobPostingUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: ICreateJobsRepository
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const job = await this.jobsRepository.findById({ id });

    if (!job) {
      throw new AppError("Job not found");
    }
    this.jobsRepository.delete({ id });
  }
}

export { DeleteJobPostingUseCase };
