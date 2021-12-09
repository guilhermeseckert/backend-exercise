import { inject, injectable } from "tsyringe";
import { ICreateJobsRepository } from "../../repositories/ICreateJobsRepository";

interface IRequest {
  title: string;
  description: string;
  payrate: number;
  location: string;
}

@injectable()
class CreateJobsUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: ICreateJobsRepository
  ) {}
  async execute({
    title,
    description,
    payrate,
    location,
  }: IRequest): Promise<void> {
    this.jobsRepository.create({ title, description, payrate, location });
  }
}

export { CreateJobsUseCase };
