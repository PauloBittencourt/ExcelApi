import { CreateMovieRating } from "../entities/CreateMovieRatingEntity";


export interface ICreateMovieRatingParams {
    name: string;
    gender: string;
    score: string;
    evaluatorName: string;
    observation: string;
    code: string;
};

export interface IGetMovieParams {
    code: string;
  }

export interface ICreateMovieRatingRepository {
    save(params: ICreateMovieRatingParams): Promise<CreateMovieRating[]>;
    get(params: IGetMovieParams): Promise<CreateMovieRating[]>;
};

