import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteJobPostingUseCase } from "./DeleteJobPostingUseCase";

class DeleteJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const deleteJobUseCase = container.resolve(DeleteJobPostingUseCase);
    await deleteJobUseCase.execute({
      id: Number(id),
    });
    return response.status(200).send();
  }
}

export { DeleteJobController };
