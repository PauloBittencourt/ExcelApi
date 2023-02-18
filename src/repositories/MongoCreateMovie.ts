//@ts-nocheck
import { CreateMovie } from "../entities/CreateMovieEntity";
import { ICreateMovieParams, ICreateMovieRepository } from "./IMongoCreateMovie";
import CreateMovieModel from "../models/CreateMovieModel";

export class MongoCreateMovieRepository implements ICreateMovieRepository {
    async save(params: ICreateMovieParams): Promise<CreateMovie> {
        return CreateMovieModel.create(params)
    };

    async get(params: IGetMovieParams): Promise<CreateMovie> {
        return CreateMovieModel.find(params)
    }
}
