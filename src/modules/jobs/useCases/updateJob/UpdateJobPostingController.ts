import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateJobPostingUseCase } from "./UpdateJobPostingUseCase";

class UpdateJobPostingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;
    const { title, description, payrate, location } = request.body;
    const updateJobUseCase = container.resolve(UpdateJobPostingUseCase);
    await updateJobUseCase.execute({
      id: Number(id),
      title,
      description,
      payrate,
      location,
    });
    return response.status(204).send();
  }
}

export { UpdateJobPostingController };
