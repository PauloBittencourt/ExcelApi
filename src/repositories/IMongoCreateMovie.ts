import { CreateMovie } from "../entities/CreateMovieEntity";

export interface ICreateMovieParams {
  name: string;
  gender: string;
  duration: string;
  director: string;
  actors: string;
  code: string;
};

export interface IGetMovieParams {
  code: string;
};

export interface ICreateMovieRepository {
  save(params: ICreateMovieParams): Promise<CreateMovie>;
  get(params: IGetMovieParams): Promise<CreateMovie>;
};

