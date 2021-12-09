import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateJobsUseCase } from "./CreateJobPostingUseCase";

class CreateJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, payrate, location } = request.body;
    const createJobUseCase = container.resolve(CreateJobsUseCase);
    await createJobUseCase.execute({
      title,
      description,
      payrate,
      location,
    });
    return response.status(201).send();
  }
}

export { CreateJobController };
