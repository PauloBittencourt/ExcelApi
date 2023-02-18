import { CreateMovieDTO } from './CreateMovieDTO';

import { MongoCreateMovieRepository } from "../../repositories/MongoCreateMovie"

export class CreateMovieUseCase {
    constructor(private mongoCreateMovieRepository: MongoCreateMovieRepository) { }

    async execute(data: CreateMovieDTO) {
        try {
    
            return await this.mongoCreateMovieRepository.save(data)
        } catch (error) {
            throw new Error(error.message);
        }

    }
}
