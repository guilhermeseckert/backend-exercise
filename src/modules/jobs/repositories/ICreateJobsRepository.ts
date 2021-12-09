import { Jobs } from "../entities/Jobs";
interface ICreateCategoryDTO {
  id?: number;
  title: string;
  description: string;
  payrate: number;
  location: string;
}

export interface ICreateJobsRepository {
  update({
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<Jobs>;
  list(): Promise<Jobs[]>;
  create({
    id,
    title,
    description,
    payrate,
    location,
  }: ICreateCategoryDTO): Promise<void>;

  delete({ id }: any): Promise<void>;

  findById({ id }: any): Promise<Jobs>;
}
