import { inject, injectable } from "tsyringe";

import { Jobs } from "../../entities/Jobs";
import { JobsRepository } from "../../repositories/implementations/JobsRepository";

@injectable()
class ListJobsUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: JobsRepository
  ) {}
  execute(): Promise<Jobs[]> {
    const jobs = this.jobsRepository.list();
    return jobs;
  }
}
export { ListJobsUseCase };
