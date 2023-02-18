//@ts-nocheck
import { CreateMovieRating } from "../entities/CreateMovieRatingEntity";
import { ICreateMovieRatingParams, ICreateMovieRatingRepository, IGetMovieParams } from "./IMongoCreateMovieRating";
import CreateMovieRatingModel from "../models/CreateMovieRatingModel";

export class MongoCreateMovieRatingRepository implements ICreateMovieRatingRepository {
    async save(params: ICreateMovieRatingParams): Promise<CreateMovieRating[]> {
        return CreateMovieRatingModel.create(params);
    };

    async get(params: IGetMovieParams): Promise<CreateMovieRating[]>{
        return CreateMovieRatingModel.find(params);
    };

};
