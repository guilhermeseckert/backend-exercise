import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListJobsUseCase } from "./ListJobsUseCase";

class ListJobsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listJobsController = container.resolve(ListJobsUseCase);
    const all = await listJobsController.execute();
    return response.status(200).json(all);
  }
}

export { ListJobsController };
